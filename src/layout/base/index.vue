<template>
  <div class="base-layout">
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer v-if="route.name === 'Welcome'">
      <div>
        <a href="https://beian.miit.gov.cn" target="_blank">------ALU-----</a>
        <div>No One ©{{ curYear }} Created by No One</div>
      </div>
    </el-footer>
  </div>
</template>

<script lang="ts" setup>
  import dayjs from 'dayjs'
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import LayoutHeader from '../header/index.vue'

  const route = useRoute()
  // 获取当前年份
  const curYear = ref(dayjs().year())
</script>

<style lang="less">
  @import './index.less';
</style>
