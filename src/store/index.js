/**
 * Created by yelingfeng on 2016/10/24.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger.js';
Vue.use(Vuex) ;
const isProd = process.env.NODE_ENV === 'production';
const plugins = isProd ? [] : [createLogger];

const store = new Vuex.Store({
  plugins: plugins,
  state: {
    testData: ''
  },
  actions: {},
  mutations: {},
  getters: {
  }
});

export default store ;
