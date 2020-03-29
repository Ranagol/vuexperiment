import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  
  getters: {
    getterNumber: state => state.number,
  },
  state: {
    number: 0,
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
      }, 2000 );
    }
  }
});