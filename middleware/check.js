 export default defineNuxtRouteMiddleware((to, from) => {/     if (to.params.id === 'hello')
    {
     return abortNavigation()
     }
     return navigateTo('/')
  })

