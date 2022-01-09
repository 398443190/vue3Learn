<template>
  <span>
    {{ displayValue }}
  </span>
</template>
<script lang="ts" setup>
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick,toRefs, watchEffect } from "vue";
const props = defineProps({
  startVal: {
    type: Number,
    required: false,
    default: 0,
  },
  endVal: {
    type: Number,
    required: false,
    default: 2017,
  },
  duration: {
    type: Number,
    required: false,
    default: 3000,
  },
  autoplay: {
    type: Boolean,
    required: false,
    default: true,
  },
  decimals: {
    type: Number,
    required: false,
    default: 0,
    validator(value: Number) {
      return value >= 0;
    },
  },
  decimal: {
    type: String,
    required: false,
    default: ".",
  },
  separator: {
    type: String,
    required: false,
    default: ",",
  },
  prefix: {
    type: String,
    required: false,
    default: "",
  },
  suffix: {
    type: String,
    required: false,
    default: "",
  },
  useEasing: {
    type: Boolean,
    required: false,
    default: true,
  },
});


const localStartVal = ref(props.startVal)
const displayValue = ref(0)
const printVal = ref(null)
const paused = ref(false)
const localDuration = ref(props.duration)
const startTime = ref(null)
const timestamp = ref(null)
const remaining = ref(null)
const rAF = ref(null)

watchEffect(() => {
    
})
</script>
 