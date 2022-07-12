import { useStorage, StorageSerializers } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
const user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object
})
const loginModel = ref({
  username: 'username',
  password: 'password'
})
const loginedIn = computed(() => user.value?.id)
export const useUser = () => {
  const router = useRouter()
  const login = async () => {
    user.value = { id: 1, username: loginModel.value.username }
    ElMessage.success('Login success')
    router.push('/')
  }
  const logout = async () => {
    user.value = null
    ElMessage.success('Logout success')
    router.push('/login')
  }
  return {
    loginModel,
    user,
    login,
    loginedIn,
    logout
  }
}
