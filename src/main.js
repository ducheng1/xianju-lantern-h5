import { createApp } from 'vue'
import './style/index.scss'
import App from './App.vue'
import store from '@/store/index.js'
import vueEsign from 'vue-esign'

const app = createApp(App)

app.use(store)
app.use(vueEsign)

app.mount('#app')
