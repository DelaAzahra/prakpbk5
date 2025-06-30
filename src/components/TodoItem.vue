<template>
  <li>
    <input type="checkbox" :checked="todo.done" @change="store.toggleDone(todo.id)" />
    <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
      {{ todo.text }}
    </span>
    <button @click="store.removeTodo(todo.id)">Hapus</button>
  </li>
</template>

<script>
import { useTodoStore } from '../stores/todoStore'

export default {
  props: ['todo'],
  setup() {
    const store = useTodoStore()
    return { store }
  }
}
</script>
