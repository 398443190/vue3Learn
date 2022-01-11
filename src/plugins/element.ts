import ElementPlus from 'element-plus'
import '../element-variables.scss'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import { App } from 'vue'

export default (app: {
  use: (
    arg0: { version: string; install: (app: App<any>) => void },
    arg1: { locale: typeof locale }
  ) => void
}) => {
  app.use(ElementPlus, { locale })
}
