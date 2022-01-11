import CountToNext from './CountToNext.vue'

import { App } from 'vue'
export default {
  install(app: App) {
    app.component('CountToNext', CountToNext)
  }
}
