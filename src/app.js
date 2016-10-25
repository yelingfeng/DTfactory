import Vue from 'vue' ;
import store from './store' ;
import App from './app.vue' ;
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(Element);

const app = new Vue({ // eslint-disable-line
  store,
  render: h => h(App)
});

app.$mount('#app')
