<template>
  <div class="crud-container">
    <h1>User</h1>
    <form @submit.prevent="createUser">
      <input v-model="newUser.firstName" placeholder="First name" required />
      <input v-model="newUser.lastName" placeholder="Last name" required />
      <input v-model="newUser.email" placeholder="Email" required />
      <button type="submit">Create</button>
    </form>
    <ul v-if="users.length">
      <li v-for="user in users">
        <div>
          <strong>{{ user.firstName }} {{ user.lastName }}</strong> - {{ user.email }}
          <button>Edit</button>
          <button @click="deleteUser(user.id)">Delete</button>
        </div>
      </li>
    </ul>
    <div v-else class="no-users">No users found.</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
}

const users = ref<User[]>([])
const newUser = ref<Omit<User, 'id'>>({ firstName: '', lastName: '', email: '' })

const fetchUsers = async () => {
  try {
    const res = await fetch('https://dummyjson.com/users?limit=5')
    if (!res.ok) throw new Error('API error: ' + res.status)
    const data = await res.json()
    users.value = data.users || []
  } catch (e: any) {
    users.value = []
    alert('Error loading users: ' + e.message)
  }
}

const createUser = async () => {
  try {
    const res = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser.value)
    })
    if (!res.ok) throw new Error('API error: ' + res.status)
    const data: User = await res.json()
    users.value.unshift(data)
    newUser.value = { firstName: '', lastName: '', email: '' }
  } catch (e: any) {
    alert('Error creating user: ' + e.message)
  }
}

// TODO: API call to update user (To do inside a modal)
// const updateUser = async (id: number) => {
//   try {
//     const res = await fetch(`https://dummyjson.com/users/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(editUser.value)
//     })
//     if (!res.ok) throw new Error('API error: ' + res.status)
//     const data: User = await res.json()
//     const idx = users.value.findIndex(u => u.id === id)
//     users.value[idx] = data
//   } catch (e: any) {
//     alert('Error updating user: ' + e.message)
//   }
// }

const deleteUser = async (id: number) => {
  try {
    const res = await fetch(`https://dummyjson.com/users/${id}`, { method: 'DELETE' })
    if (!res.ok) throw new Error('API error: ' + res.status)
    users.value = users.value.filter(u => u.id !== id)
  } catch (e: any) {
    alert('Error deleting user: ' + e.message)
  }
}

onMounted(fetchUsers)
</script>

<style scoped>
@import '../assets/users-crud.css';
.no-users {
  text-align: center;
  color: #888;
  margin-top: 2rem;
}
</style>

