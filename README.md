# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.


脚手架到底是什么东西？
脚手架本质就是一个操作系统的客户端
他通过命令行执行
例如 vue create vue-test-app
主命令  vue
command  create
command的param  vue-test-app

表示创建一个vue项目 名称是 vue-test-app

脚手架的实现原理。
首先 node 是操作系统上的一个客户端
1:为什么我们安装的是 @vue/cli 但是使用的是vue命令
2:全局安装@vue/cli到底发生了什么
3:执行vue命令的时候发生了什么？ 为什么vue执行了一个js文件，我们却可以直接通过vue命令去执行它？
