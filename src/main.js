import Vue from 'vue' ;
import store from './store' ;
import App from './app.vue' ;

new Vue({ // eslint-disable-line
  store,
  el: '#app',
  render: h => h(App)
});
