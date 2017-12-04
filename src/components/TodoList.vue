<template>
  <div>
  <div>
    <input
      type="text"
      v-model="input_val"
      v-on:keydown="submit"
      placeholder="TODO"
    />
  </div>
  <div>
    <ul>
      <li v-for="todo in todos">
        {{todo.value}}
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'todo-list',
    data() {
      return {
        input_val: '',
        todos: [],
      };
    },
    methods: {
      submit({ keyCode }) {
        if (keyCode === 13) {
          this.addTodo();
          this.input_val = '';
        }
      },
      addTodo() {
        this.todos.push({
          value: this.input_val,
          complete: false,
        });
      },
    },
  };
</script>

<style scoped>

</style>
