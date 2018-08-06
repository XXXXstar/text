<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view></router-view>
    <hop-show></hop-show>
    <foot></foot>
    <goods-nav></goods-nav>
    <classify></classify>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
