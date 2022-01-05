<template>
  <div class="game">
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
