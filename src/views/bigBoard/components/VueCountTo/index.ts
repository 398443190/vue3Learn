import CountTo from './vue-countTo.vue'

import { App } from 'vue'
export default {
  install(app: App) {
    app.component('CustomCountTo', CountTo)
  }
}
