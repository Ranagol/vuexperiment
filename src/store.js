import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    number: 0,
  },
  getters: {
    getterNumber: state => state.number,
  },
  mutations: {
    mutationsIncrement(state){
      state.number++;
    }
  },
  actions: {
    asyncIncrement: ({commit }) => {
      setTimeout(() => {
        commit('mutationsIncrement');
      }, 1000 );
    }
  }
});