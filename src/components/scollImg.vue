<template>
    <div  ref = "el"  class="scollImg swiper-container">
           <div class="swiper-wrapper">
                <div
                    v-for = " (banner, i) in ScollImg "
                    :key = " i "
                class="swiper-slide">
                    <img :src="banner.image" alt="">
                </div>
                
            </div>
            <div class="swiper-pagination"></div>
    </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import Swiper from 'swiper'

    export default {
        name : 'ScollImg',
        data () {
            return {
            ScollImg : []
            }
        },
        methods : {
            getScoll(){
                this.$http.get('/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=2018849303033079').then(res=>{
                    this.ScollImg = res.data.scrollImg; 
                    Vue.nextTick(() => {
                     new Swiper(this.$refs.el, {
                         pagination: {
                            el: '.swiper-pagination'                        
                         }
                     })
                }) 
                })
            }
        },
         created(){
            this.getScoll();
        }

    }

</script>

<style scoped lang="scss">
    .scollImg{
            position:relative;
         .swiper-wrapper {
                width: 100%;
                height: 2.5rem;
            }
            .swiper-slide {
                img {width: 100%; display:block;}
            }
            .swiper-pagination  {
              width:3.75rem;
              height:0.12rem;
              position: absolute;
                bottom: 8px;
                width: 100%;
                text-align: center;
                background: 0;
            }
          }
</style>