<template>
  <div
    class="container_todo_list-item"
    v-bind:class="{ 'item--complete': data.complete }"
  >
    <input type="checkbox" v-bind:checked="data.complete" v-on:change="checkedItem" />
    <span>{{data.value}}</span>
    <i class='material-icons item-delete' v-on:click="deleteItem">clear</i>
  </div>
</template>

<script>
  export default {
    name: 'td-item',
    props: ['data'],

    methods: {
      checkedItem() {
        this.$emit('onCheckbox');
      },
      deleteItem() {
        this.$emit('onDelete');
      },
    },
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

  .item-delete{
    cursor: pointer;
  }

  .item-delete:hover{
    color: red;
  }
</style>
