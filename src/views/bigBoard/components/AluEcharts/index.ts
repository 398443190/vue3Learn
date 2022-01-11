import AluEcharts from './index.vue'

import { App } from 'vue'
export default {
  install(app: App) {
    app.component('AluEcharts', AluEcharts)
  }
}
