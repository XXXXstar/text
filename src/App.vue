<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <home></home> -->
    <router-view></router-view>
    <hop-show></hop-show>
    <foot></foot>
    <goods-nav></goods-nav>
    <classify></classify>
=======
    <app-serch></app-serch>
  <!--   <app-serch></app-serch>
 --><app-points></app-points>
    <app-scollimg></app-scollimg>
    <mall-act></mall-act>
>>>>>>> c5b8c4fd4699c252d7064299b3d1e6ba70f97e8e
  </div>
</template>

<script>
<<<<<<< HEAD
import Home from './components/Home.vue'
import HopShow from './components/HotShow'
import Foot from './components/Foot'
import GoodsNav from './components/GoodsNav'
import Classify from './components/Classify'
// import AppHomeBanner from './components/HomeBanner.vue'

export default {
  name: 'App',
  components: {
    Home,
    HopShow,
    Foot,
    GoodsNav,
    Classify
 
    // AppHomeBanner,
=======
import AppSerch from './components/serch.vue'
import AppPoints from './components/AppPoints.vue'
import AppScollimg from './components/scollImg.vue'
import MallAct from './components/mall_act.vue'
export default {
  name: 'App',
  components:{
    AppSerch,
    AppPoints,
    AppScollimg,
    MallAct
>>>>>>> c5b8c4fd4699c252d7064299b3d1e6ba70f97e8e
  }
}
</script>

<style>
<<<<<<< HEAD

=======
#app {
  display:flex;
  flex-direction: column;
}
>>>>>>> c5b8c4fd4699c252d7064299b3d1e6ba70f97e8e
</style>
