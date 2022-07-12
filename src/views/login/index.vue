<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
  // import { ElMessage } from 'element-plus'
  // import { computed, ref } from 'vue'
  // import { useRouter } from 'vue-router'
  import { useUser } from '@/composables/useUser'

  // const router = useRouter()
  const { loginModel, login } = useUser()
</script>

<template>
  <div class="">login</div>
  <el-form ref="form" :model="loginModel" label-width="80px">
    <el-form-item label="username">
      <el-input v-model="loginModel.username"></el-input>
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="loginModel.password" type="password"></el-input>
    </el-form-item>
    <el-button class="" @click.prevent="login">login</el-button>
  </el-form>
</template>
