import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
// import GoodsNav from '../components/GoodsNav.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeTop',
      component: Home
    },
    // {
    //   path: '/GoodsNav',
    //   name: 'GoodsNav',
    //   component: GoodsNav
    // }
  ]
})
