<template>
  <div>
    <input
      type="text"
      v-model="input_val"
      v-on:keydown="submit"
      placeholder="TODO"
    />
  </div>
</template>

<script>
  export default {
    name: 'todo-list',
    data() {
      return {
        input_val: '',
      };
    },
    methods: {
      submit({ keyCode }) {
        if (keyCode === 13) {
          console.log(this.input_val);
        }
      },
    },
  };
</script>

<style scoped>

</style>
