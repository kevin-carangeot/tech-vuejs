import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)

  return { user }
})

