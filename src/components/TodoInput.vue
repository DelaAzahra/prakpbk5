<template>
  <div>
    <input v-model="newTodo" @keyup.enter="add" placeholder="Tambah tugas..." />
    <button @click="add">Tambah</button>
  </div>
</template>

<script>
import { useTodoStore } from '../stores/todoStore'

export default {
  data() {
    return {
      newTodo: ''
    }
  },
  setup() {
    const store = useTodoStore()
    return { store }
  },
  methods: {
    add() {
      if (this.newTodo.trim()) {
        this.store.addTodo(this.newTodo)
        this.newTodo = ''
      }
    }
  }
}
</script>
