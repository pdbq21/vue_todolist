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
    <div class="container_todo_list" v-if="todosAll.length">
      <div
        class="container_todo_list-item"
        v-bind:class="{ 'item--complete': todo.complete }"
        v-for="(todo, index) in todosAll"
      >
        <input type="checkbox" v-on:change="handleChange(index, todo.complete)">
        <span>{{todo.value}}</span>
        <button v-on:click="deleteTodo(index)">X</button>
      </div>
      <div class="container_todo_list-filter">
        <div class="filters">
          <span
            v-on:click="handleFilter(filter)"
            v-for="filter in filters"
            v-bind:class="{ 'filters-item--active': filter === activeFilter }"
            class="filters-item"
          >
            {{filter}}
          </span>
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
        todosAll: [],
        todos: [],

        filters: ['All', 'Active', 'Complete'],
        activeFilter: 'All',
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
        this.todosAll.push({
          value: this.input_val,
          complete: false,
        });
      },
      deleteTodo(index) {
        this.todosAll.splice(index, 1);
      },

      handleFilter(filter) {
        this.activeFilter = filter;
      },

      handleChange(index, bool) {
        this.todosAll[index].complete = !bool;
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

  .item--complete {
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
