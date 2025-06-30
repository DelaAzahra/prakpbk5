<!-- src/components/TodoInput.vue -->
<template>
  <div>
    <input v-model="text" @keyup.enter="add" placeholder="Tambah tugas baru..." />
    <button @click="add">Tambah</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const store = useTodoStore()
const text = ref('')

function add() {
  store.addTodo(text.value)
  text.value = ''
}
</script>
