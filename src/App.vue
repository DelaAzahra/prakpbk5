<!-- src/App.vue -->
<template>
  <div>
    <h1>Aplikasi Todo List (Pinia)</h1>
    <TodoInput />
    <p>Tugas belum selesai: {{ store.unfinishedCount }}</p>
    <ul>
      <TodoItem v-for="todo in store.todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script setup>
import TodoInput from './components/TodoInput.vue'
import TodoItem from './components/TodoItem.vue'
import { useTodoStore } from './stores/todoStore'

const store = useTodoStore()
</script>

