<template>
  <div class="container">
    <td-form
      v-on:submitInput="addTodo"
      @onSelectedAll="handleSelectedAll"
      :isSelected="selectedAll"
    ></td-form>
    <div class="container_todo_list" v-if="!!todos.length">
      <td-item
        v-for="(todo, index) in filtersTodo(todos)"
        :data="todo"
        v-bind:key="todo.id"
        @onCheckbox="handleCheckbox(index)"
        @onDelete="deleteTodo(index)"
      ></td-item>
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
  import TodoForm from './Form';
  import TodoItem from './Item';

  export default {
    name: 'todo-list',
    components: { 'td-form': TodoForm, 'td-item': TodoItem },
    data() {
      return {
        rootId: 0,
        todos: [],

        filters: ['All', 'Active', 'Complete'],
        activeFilter: 'All',
        selectedAll: false,
      };
    },
// lifecycle:
    beforeCreate() {
      // console.log('beforeCreate');
    },
    created() {
      console.log('created', this);
    },
    mounted() {
      console.log(25);
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated', this.todos);
      this.$nextTick(() => {
        // Code that will run only after the
        // entire view has been re-rendered
        console.log('$nextTick');
      });
    },
    computed: {
// not update
    },
    methods: {
      addTodo(todoValue) {
        console.log(this.todos);
        const ids = this.rootId;
        this.todos.push({
          id: ids,
          value: todoValue,
          complete: false,
        });

        this.rootId += 1;
        this.selectedAll = false;
      },
      deleteTodo(index) {
        this.$delete(this.todos, index);
      },

      handleFilter(filter) {
        this.activeFilter = filter;
      },

      handleCheckbox(index) {
        this.todos[index].complete = !this.todos[index].complete;
      },

      filtersTodo(data) {
        console.log(data);
        let temp;
        if (this.activeFilter === 'Active') {
          temp = data.filter(({ complete }) => !complete);
        } else if (this.activeFilter === 'Complete') {
          temp = data.filter(({ complete }) => complete);
        } else {
          temp = data;
        }
        return temp;
      },
      itemsLeft() {
        const items = this.todos.filter(({ complete }) => complete).length;
        return `${items} item${(items > 1) ? 's' : ''} left`;
      },
      handleClearComplete() {
        this.todos = this.todos.filter(({ complete }) => !complete);
      },
      handleSelectedAll() {
        const bool = this.selectedAll;
        this.todos = this.todos.map((todo) => {
          const newTodo = todo;
          newTodo.complete = !bool;
          return newTodo;
        });
        this.selectedAll = !bool;
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

  .container_todo_list {
    display: flex;
    flex-direction: column;
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
