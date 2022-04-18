import Vue from 'vue'
import Router from 'vue-router'

//signup
import signup from '@/components/signup'
//login
import login from '@/components/login'
//set Password
import setPassword from '@/components/setPassword'
//home
import home from '@/components/home'
import catalog from '@/components/catalog'
import user from '@/components/user'
import shopingCart from '@/components/shopingCart'
import About from '@/views/About'
// import shopingCart from '@/components/shopingCart'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Login', component: login },
    { path: '/signup', name: 'Signup', component: signup},
    { path: '/setPassword', name: 'Set Password', component: setPassword},
    { path: '/home', name: 'home', component: home},
    { path: '/group93', name: 'group93', component: About},
    { path: '/catalog', name: 'cat', component: catalog},
    { path: '/user', name: 'user', component: user},
    { path: '/cart', name: 'cart', component: shopingCart},
  ]
})