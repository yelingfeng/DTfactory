/**
 * Created by yelingfeng on 2016/10/24.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger.js';
import * as actions from './actions'
import * as getters from './getters'
import dataset from "./modules/dataset"
import layout from "./modules/layout"
Vue.use(Vuex) ;

const isProd = process.env.NODE_ENV === 'production';
const plugins = isProd ? [] : [createLogger];

const store = new Vuex.Store({
  plugins: plugins,
  actions,
  getters,
  modules: {
    layout,
    dataset
  }
});

export default store ;
