import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from "vue-router"
import menu1 from './components/menu1.vue'
import menu2 from './components/menu2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: menu1 },
    { path: '/xxx', component: menu2}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
