import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'

Vue.use(Router)

export default new Router({
  mode:"history", //去掉哈希 #
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})