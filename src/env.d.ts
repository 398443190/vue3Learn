// 默认配置包含了 boolean, 导致
// 封装 axios 时给 baseURL 赋值报错

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
interface ImportMetaEnv {
  VITE_APP_BASE_URL?: string
}
