export default defineEventHandler( async (event) => {
    if(event.req.method === 'GET'){
        // return {message: 'Hello World: This is a GET request'}

        // const data = await $fetch('http://127.0.0.1:1337/api/users',{})
        const data = await $fetch('https://www.itgenius.co.th/sandbox_api/mrta_flutter_api/public/api/news',{})
        console.log(data)
        // return data.value
        // const {data} = await fetch('http://localhost:1337/api/users')
        return data
    }

    if(event.req.method === 'POST'){
        return {message: 'Hello World: This is a POST request'}
    }
})