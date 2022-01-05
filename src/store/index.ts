import { createStore, createLogger } from 'vuex'

const debug: boolean = import.meta.env.MODE === 'development'
const plugins = debug ? [createLogger({ collapsed: true })] : []
export default createStore({
	state: {},
  mutations: {},
  actions: {},
  modules: {},
  strict: debug,
  plugins: plugins,
})