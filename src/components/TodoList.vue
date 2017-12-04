<template>
  <div class="container">
    <div class="container_form">
      <input
        class="container_form-input"
        type="text"
        v-model="input_val"
        v-on:keydown="submit"
        placeholder="TODO"
      />
    </div>
    <div class="container_todo_list">
      <div class="container_todo_list-item" v-for="(todo, index) in todos">
        <span>{{todo.value}}</span>
        <button v-on:click="deleteTodo(index)">X</button>
      </div>
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
      deleteTodo(index) {
        this.todos.splice(index, 1);
      },
    },
  };
</script>

<style scoped>
  .container {
    margin: 0 auto;
    max-width: 25em;
    min-width: 25em;
  }

  .container_form{
    display: flex;
  }
  .container_form-input {
    height: 2em;
    flex-grow: 1;
    padding: 1px 10px;
    font-size: 25px;
  }

  .container_form-input:hover,
  .container_form-input:focus {
    outline: none;
  }

  .container_todo_list {
    display: flex;
    flex-direction: column;
  }

  .container_todo_list-item {
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    height: 2em;
    align-items: center;
    padding: 5px 10px;
  }

</style>
