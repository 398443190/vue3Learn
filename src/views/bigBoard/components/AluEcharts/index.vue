<template>
  <div class="echarts" :id="id"></div>
</template>

<script setup lang="ts">
  import { watchEffect, onMounted, ref } from 'vue'
  import * as Echarts from 'echarts'
  const props = defineProps({
    id: String,
    options: Object,
    theme: String
  })

  onMounted(() => {
    initChart()
  })
  let dom
  let chart = null
  const initChart = () => {
    if (!chart) {
      dom = document.getElementById(props.id)
      chart = Echarts.init(dom, '')
    } else {
      return
    }
    if (!props.options) return
    chart.setOption(props.options)
  }

  // watchEffect(() => {
  //   initChart()
  //   chart.setOption(props.options)
  // })
</script>

<style lang="less" scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
</style>
