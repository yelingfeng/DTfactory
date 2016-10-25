/**
 * Created by yelingfeng on 2016/10/24.
 */
import Vue from 'vue' ;
import Plist from './Plist.vue' ;
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(Element);

const app = new Vue({ // eslint-disable-line
  render: h => h(Plist)
});

app.$mount('#app');
