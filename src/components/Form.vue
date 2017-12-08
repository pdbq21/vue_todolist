<template>
  <div class="container_form">
    <i
      class="material-icons selected_all"
    >
      &#xE877;
    </i>
    <input
      class="container_form-input"
      type="text"
      placeholder="TODO"
      :value="value"
      @keydown="changeInput"
    />
  </div>
</template>

<script>
  export default {
    name: 'td-form',
    data() {
      return {
        value: '',
      };
    },
    methods: {
      changeInput({ keyCode, target }) {
        if (keyCode === 13 && !!target.value) {
          this.$emit('submitInput', this.value);
          this.value = '';
        } else {
          this.value = target.value;
        }
      },
    },
  };
</script>

<style scoped>

  .container_form {
    display: flex;
    height: 3em;
    border: 1px solid;
    align-items: center;
  }

  .container_form-input {
    flex-grow: 1;
    font-size: 25px;
    border: none;
    padding: 1px 10px;
  }

  .container_form-input:hover,
  .container_form-input:focus {
    outline: none;
  }

  .selected_all--active {
    color: #42b983;
  }

  .selected_all {
    margin-left: 10px;
    cursor: pointer;
    font-size: 30px;
    color: #2c3e50;
    display: block;
  }

  .list_empty .selected_all {
    display: none;
  }

</style>

<!--

<div class="container_form">
  <i
    class="material-icons selected_all"
    v-bind:class="{ 'selected_all&#45;&#45;active': !todosAll.length }"
    v-on:click="handleSelectedAll"
  >
    &#xE877;
  </i>
  <input
    class="container_form-input"
    type="text"
    v-model="input_val"
    v-on:keydown="submit"
    placeholder="TODO"
  />
</div>-->
