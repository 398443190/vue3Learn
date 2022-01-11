import { CountTo } from 'vue3-count-to'

import { App } from 'vue'
export default {
  install(app: App) {
    app.component('CountTo', CountTo)
  }
}
