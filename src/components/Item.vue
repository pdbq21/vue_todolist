<template>
  <div
    class="container_todo_list-item"
    v-bind:class="{ 'item--complete': todo.complete }"
    v-for="(todo, index) in filtersTodo(todos)"
  >
    <input type="checkbox" v-bind:checked="todo.complete" v-on:change="handleChange(index, todo.complete)">
    <span>{{todo.value}}</span>
    <i class='material-icons' v-on:click="deleteTodo(index)">clear</i>
  </div>
</template>

<script>
  export default {
    name: 'td-item',
  };
</script>

<style scoped>
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
</style>
