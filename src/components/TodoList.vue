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
        v-for="(todo, index) in filtersTodo(todosAll)"
      >
        <input type="checkbox" v-bind:checked="todo.complete" v-on:change="handleChange(index, todo.complete)">
        <span>{{todo.value}}</span>
        <button v-on:click="deleteTodo(index)">X</button>
      </div>
      <div class="container_todo_list-panel">
        <span class="items_left">{{itemsLeft()}}</span>
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
        <span
          class="clear_complete"
          v-on:click="handleClearComplete"
        >
          Clear complete
        </span>
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

        filters: ['All', 'Active', 'Complete'],
        activeFilter: 'All',
      };
    },
// lifecycle:
    beforeCreate() {
      // console.log('beforeCreate');
    },
    created() {
      // console.log('created');
    },
    beforeUpdate() {
      // console.log('beforeUpdate');
    },
    updated() {
      // console.log('updated');
      this.$nextTick(() => {
        // Code that will run only after the
        // entire view has been re-rendered
        // console.log('$nextTick');
      });
    },
    computed: {
// not update
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

      filtersTodo(array) {
        let temp;
        if (this.activeFilter === 'Active') {
          temp = array.filter(({ complete }) => !complete);
        } else if (this.activeFilter === 'Complete') {
          temp = array.filter(({ complete }) => complete);
        } else {
          temp = array;
        }
        return temp;
      },
      itemsLeft() {
        const items = this.todosAll.filter(({ complete }) => complete).length;
        return `${items} item${(items > 1) ? 's' : ''} left`;
      },
      handleClearComplete() {
        this.todosAll = this.todosAll.filter(({ complete }) => !complete);
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

  .container_todo_list-panel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    background: #2c3e50;
    color: #fff;
    height: 3em;
    padding: 0 10px;
    font-size: 14px;
  }

  .filters-item:hover {
    border-bottom: 2px solid #42b983;
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

  .items_left {
    cursor: default;
  }

  .clear_complete:hover {
    cursor: pointer;
    border-bottom: 1px solid #42b983;
  }
</style>
