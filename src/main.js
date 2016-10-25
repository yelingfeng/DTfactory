import Vue from 'vue' ;
import store from './store' ;
import App from './app.vue' ;

const app = new Vue({ // eslint-disable-line
  store,
  render: h => h(App)
});

app.$mount('#app')
