import Vue from "vue";
import VueResource from "vue-resource"
import {API_ROOT} from './config'
Vue.use(VueResource)
Vue.http.options.crossOrigin = true;


const initSelectModules = (options) => Vue.http.get(API_ROOT + "/selectModules",options);

export default {
  initSelectModules
}