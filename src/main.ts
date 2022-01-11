import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import  CountTo from './components/countTo/index';
import  CustomCountTo from './views/bigBoard/components/VueCountTo/index';
import  CountToNext from './views/bigBoard/components/VueCountToNext/index';
const app = createApp(App)
installElementPlus(app)
app.use(router).use(store).use(CountTo).use(CustomCountTo).use(CountToNext).use(CountTo).mount('#app')
