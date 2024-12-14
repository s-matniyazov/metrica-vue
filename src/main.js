import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import { createPinia } from 'pinia'

import './assets/css/user.min.css'
import './assets/css/theme.min.css'
import './assets/css/line.css'

import './index.css'

const pinia = createPinia()

// router.beforeEach((to) => {
//     // ✅ This will work because the router starts its navigation after
//     // the router is installed and pinia will be installed too
//     const store = useStore()
//
//     if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
// })

const app = createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');
