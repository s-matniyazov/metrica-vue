import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import { createPinia } from 'pinia'

import './assets/css/user.min.css'
import './assets/css/theme.min.css'
import './assets/css/line.css'

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
