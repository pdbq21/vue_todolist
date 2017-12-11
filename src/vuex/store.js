import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    rootId: 0,
    todos: [],

    filters: ['All', 'Active', 'Complete'],
    activeFilter: 'All',
    selectedAll: false,
  },
  actions: {
    addTodo: ({ commit }, value) => {
      commit('ADD_NEW_TODO', value);
    },
  },
  mutations: {
    ADD_NEW_TODO: (state, todoValue) => {
      console.log('mutations', todoValue);
      state.todos.push({
        id: state.rootId,
        value: todoValue,
        complete: false,
      });
      state.rootId += 1;
    },
  },
  getters: {},
  // modules: {},
});

export default store;
