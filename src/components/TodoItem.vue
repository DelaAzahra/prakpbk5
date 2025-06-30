<!-- src/components/TodoItem.vue -->
<template>
  <li>
    <input type="checkbox" :checked="todo.done" @change="store.toggleTodo(todo.id)" />
    <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
      {{ todo.text }}
    </span>
    <button @click="store.removeTodo(todo.id)">Hapus</button>
  </li>
</template>

<script setup>
import { useTodoStore } from '../stores/todoStore'
const store = useTodoStore()

defineProps({
  todo: Object
})
</script>
