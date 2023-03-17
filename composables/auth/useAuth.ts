export const useAuth = ( ()=> {
    const authUser = useAuthUser();

    const setUser = (user: any) => {
      authUser.value = user;
    };
  
    const setCookie = (cookie: any) => {
      cookie.value = cookie;
    };


    const config = useRuntimeConfig();
    const STRAPI_URL = config.strapi.url

    //Original login function
    const login = async (email: string, password: string, rememberMe: boolean) => {
    
      const {data,error} = await useAsyncData( () => $fetch(`${STRAPI_URL}/auth/local`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            identifier: email,
            password: password,
        }),
      }));

      if(error.value != null){   
        throw createError({
            statusCode : error.value.statusCode,
            message: 'Invalude email or password',
        })
      }else{
        console.log(data.value)
        const jwtToken = (data as {value: {jwt: string}}).value.jwt

        if(jwtToken){
            getRole(jwtToken)
            const user = {
                email: email,
                passwor:password,
                token: jwtToken
              }
              setUser(user)  
        }else{ //invalid user authentication failed
            
        }

      }
  
      return authUser;
    }
  
    const getRole = async  (jwt:string) => {
        
        console.log(jwt)
        const {data,error} = await useAsyncData( () => $fetch(`${STRAPI_URL}/users/me?fields[0]=email&populate[role][fields]=name`,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }))
        if(error.value != null){
            throw createError({
                statusCode : error.value.statusCode,
                message: error.value.message
            })

        }else{
            if(authUser.value != null){
                authUser.value.roles =[(data as {value: {role: {name: string}}} ).value.role.name]
                // console.log(data)
                // console.log(authUser.value)
            }
        }
        return authUser;
    }



    const logout = async () => {
      const data = await $fetch('/auth/logout', {
        method: 'POST',
      });
  
    //   setUser(data.user);
    };



  
    const me = async () => {
      if (!authUser.value) {
        try {
          const data = await $fetch('/auth/me', {
            headers: useRequestHeaders(['cookie']) as HeadersInit,
          });
  
        //   setUser(data.user);
        } catch (error) {
          setCookie(null);
        }
      }
  
      return authUser;
    };
  
    return {
      login,
      logout,
      me,
    };
})