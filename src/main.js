import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Colada, { PiniaColadaPlugin } from 'colada-plugin'
import App from './App.vue'
import router from './router'
import SvgIcon from './components/common/SvgIcon/SvgIcon.vue'

const app = createApp(App)
const pinia = createPinia()

app.component('SvgIcon', SvgIcon)
app.use(pinia)
pinia.use(PiniaColadaPlugin)
app.use(Colada)
app.use(router)
app.mount('#app')
