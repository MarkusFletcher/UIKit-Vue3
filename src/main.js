import { createApp } from 'vue'
import './styles/reset.css'
import './styles/style.scss'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
