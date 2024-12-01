import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'

import "@/assets/css/icons.min.css";
import "@/assets/css/app.min.css";
import "@/assets/css/bootstrap.min.css";
import '@mdi/font/css/materialdesignicons.css';

createApp(App)
    .use(router)
    .mount('#app')
