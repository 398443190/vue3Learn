<template>
  <div class="" id="alu-container" :ref="refName">
    <template v-if="ready">
      <slot></slot>
    </template>
    <template v-else>
    <AluLoading>数据玩命加载中。。。</AluLoading>
    </template>
  </div>
</template>

<script lang="ts" setup>
  import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue'
  import { debounce } from '../../../../utils/index'
  import AluLoading from '../AluLoading/index.vue'
  const refName: string = 'AluContainer'
  const width = ref(0)
  const height = ref(0)
  const originWidth = ref(0)
  const originHeight = ref(0)
  const ready = ref(false)
  let context: any, dom: any, observe: MutationObserver | null
  const props = defineProps({
    option: Object
  })
  onMounted(async () => {
    ready.value = false
    context = getCurrentInstance()
    await initSize()
    updateSize()
    updateScale()
    window.addEventListener('resize', debounce(100, onResize))
    initMutationObserve()
    setTimeout(() => {
      ready.value = true
    }, 3000)
  })
  const initSize = () => {
    return new Promise<void>((resolve) => {
      nextTick(() => {
        console.log(context, 'contextcontext')
        dom = context.refs[refName]
        if (props.option && props.option.width && props.option.height) {
          width.value = props.option.width
          height.value = props.option.height
        } else {
          width.value = dom.clientWidth
          height.value = dom.clientHeight
        }
        if (!originWidth || !originHeight) {
          originWidth.value = window.screen.width
          originHeight.value = window.screen.height
        }
        resolve()
      })
    })
  }

  const updateSize = () => {
    if (width.value && height.value) {
      dom.style.width = `${width.value}px`
      dom.style.height = `${height.value}px`
    } else {
      dom.style.width = `${originWidth.value}px`
      dom.style.height = `${originHeight.value}px`
    }
  }

  const updateScale = () => {
    // 获取真实的视口尺寸
    const currentWidth = document.body.clientWidth
    const currentHeight = document.body.clientHeight
    // 获取大屏最终的宽高
    const realWidth = width.value || originWidth.value
    const realHeight = height.value || originHeight.value
    const widthScale = currentWidth / realWidth
    const heightScale = currentHeight / realHeight
    dom.style.transform = `scale(${widthScale},${heightScale})`
  }
  const onResize = async () => {
    await initSize()
    updateScale()
    console.log('w  resize')
  }

  const initMutationObserve = () => {
    const MutationObserve = window.MutationObserver
    observe = new MutationObserver(onResize)
    observe.observe(dom, {
      attributes: true,
      attributeFilter: ['style'],
      attributeOldValue: true
    })
  }
  const removeMutationObserve = () => {
    if (observe) {
      observe.disconnect()
      observe.takeRecords()
      observe = null
    }
  }
  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
    removeMutationObserve()
  })
</script>
<style lang="less" scoped>
  #alu-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    overflow: hidden;
    transform-origin: left top;
  }
</style>
