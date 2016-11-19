/**
 * Created by yelingfeng on 2016/10/24.
 */
import Vue from 'vue' ;
import Plist from './Plist.vue' ;
import Element from 'element-ui';
import store from "./store/pindex";
import 'element-ui/lib/theme-default/index.css';
Vue.use(Element);

const app = new Vue({ // eslint-disable-line
  store,
  render: h => h(Plist)
});

app.$mount('#app');
