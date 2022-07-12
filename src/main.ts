import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from './plugins/element'
import CountTo from './components/countTo/index'
import CustomCountTo from './views/bigBoard/components/VueCountTo/index'
import CountToNext from './views/bigBoard/components/VueCountToNext/index'
import AluEcharts from './views/bigBoard/components/AluEcharts/index'
const app = createApp(App)
ElementPlus(app)
app
  .use(router)
  .use(store)
  .use(CountTo)
  .use(CustomCountTo)
  .use(CountToNext)
  .use(AluEcharts)
  .mount('#app')
