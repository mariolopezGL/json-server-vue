import Vue from 'vue';
import Vuex from 'vuex';
import Posts from './Posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Posts: Posts
  }
});