import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Colada, { PiniaColadaPlugin } from 'colada-plugin'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
pinia.use(PiniaColadaPlugin)
app.use(Colada)
app.use(router)
app.mount('#app')
