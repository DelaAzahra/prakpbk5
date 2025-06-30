// src/stores/todoStore.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  actions: {
    addTodo(text) {
      this.todos.push({ id: Date.now(), text, done: false })
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    toggleDone(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.done = !todo.done
    }
  },
  getters: {
    unfinishedCount: (state) => state.todos.filter(todo => !todo.done).length
  }
})
