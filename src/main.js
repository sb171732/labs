import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
// import store from './store'
import {store} from './store'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

new Vue({
  router,
  store,
  template: '<App :user="user" ></App>',
  render: h => h(App),
  updated(){
    store.dispatch('getLoginStatus')
  },
  created(){
    // this.initFirebase()
    store.dispatch('getLoginStatus')
  }
}).$mount('#app')

