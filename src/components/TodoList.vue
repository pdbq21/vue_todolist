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
    <div class="container_todo_list" v-if="todos.length">
      <div
        class="container_todo_list-item"
        v-bind:class="{ 'item--complete': todo.complete }"
        v-for="(todo, index) in todos"
      >
        <input type="checkbox" v-on:change="handleChange(index)">
        <span>{{todo.value}}</span>
        <button v-on:click="deleteTodo(index)">X</button>
      </div>
      <div class="container_todo_list-filter">
        <div class="filters" v-on:click="handleFilter">
          <span class="filters-item filters-item--active">All</span>
          <span class="filters-item">Active</span>
          <span class="filters-item">Complete</span>
        </div>
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

      handleFilter({ target }) {
        const filter = target.textContent;
        if (filter === 'All') {
// empty
        } else if (filter === 'Active') {
// empty
        } else if (filter === 'Complete') {
// empty
        } else {
          console.error(`Error: this ${filter} not yet`);
        }
      },

      handleChange(index) {
        this.todos[index].complete = !this.todos[index].complete;
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

  .container_form {
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

  .item--complete{
  background: aliceblue;
  }

  .container_todo_list-filter {
    justify-content: center;
    display: flex;
  }

  .filters {
    margin-top: 10px;
  }

  .filters-item {
    border: 1px solid #2c3e50;
    border-radius: 5px;
    padding: 3px 5px;
    cursor: pointer;
  }

  .filters-item--active {
    border: 2px solid #42b983;
  }
</style>
