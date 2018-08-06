<template>
  <div id="app">
    <app-serch></app-serch>
  <!--   <app-serch></app-serch>
 --><app-points></app-points>
    <app-scollimg></app-scollimg>
    <mall-act></mall-act>
  </div>
</template>

<script>
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
  }
}
</script>

<style>
#app {
  display:flex;
  flex-direction: column;
}
</style>
