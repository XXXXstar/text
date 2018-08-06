<template>
  <div ref = "el" class="app-home-banner swiper-container">
    <!-- <img src="http://image.juooo.com//group1/M00/02/0C/rAoKNVtQbn6AEuJtAADoNIje_YA272.jpg"/> -->
    <div class="swiper-wrapper">
      <div
        v-for = " (banner, i) in banners "
        :key = "i"
        class="swiper-slide"
      >
        <img :src="banner.image_url" alt="" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'

export default {
    name: 'AppHomeBanner',
    data () {
      return {
        banners: []
      }
    },
    methods: {
      getBanners () {
        this.$http.get('/jc/index/getNationalSildeList',
        {
          params: {
            confType: 'L',
            isSymbol: '1',
            limit: 6
          }
        }).then(res => {
          this.banners = res.data.data[0].image_url
          Vue.nextTick(() => {
            new Swiper(this.$refs.el,{
              pagination: {
                el: '.swiper-pagination'
              }
            })
          })
        })
      }
    },
    created () {
      this.getBanners()
    }
  }
</script>

<style>
  .app-home-banner{
    width: 100%;
    height: 1.54rem;
    img{
      width: 100%;
      height: 155px;
    }
  }
</style>