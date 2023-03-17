// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    routeRules:{   
        '/backend/**': {ssr:true},
    },
    build: {
      // extend(config, ctx) {
      //   if (ctx.isDev) {
      //     config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      //   }
      // },    
      transpile: ["vuetify"],
    },
    css: ["@/assets/scss/style.scss"],
    vite: {
      define: {
        "process.env.DEBUG": false,
      },
    },
    modules:[
      [
        '@nuxtjs/robots',
        {
          UserAgent: "*",
          Disallow: "",
          Sitemap: "https://www.itgenius.co.th/sitemap.xml",
        }
      ],
    ],
    app: {
      head: {
        htmlAttrs: {
          lang: 'en'
        },
        bodyAttrs: {
          class: 'demo'
        },
        charset: 'utf-8',
        titleTemplate: '%s - Nuxt 3 Vuetify',
        meta: [
          { 
            name: 'viewport', 
            content: 'width=device-width, initial-scale=1, maximum-scale=5'
          },
          {
            name: 'author',
            content: "IT Genius Engineering Ltd., Thailand"
          },
        ]
      }
    },

    // runtime config
    runtimeConfig: {
      public: {
        strapi:{
          url: process.env.STRAPI_URL || "http://localhost:1337/api"
        }
      }
    }  
})
