import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'

import './assets/css/user.min.css'
import './assets/css/theme.min.css'
import './assets/css/line.css'

createApp(App)
    .use(router)
    .mount('#app')