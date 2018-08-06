<template>
  <div class="goods-nav">
    <ul>
      <li
        v-for = 'item in NavList'
      >
        <a href="">
          <img :src="item.image" alt="" />
          <p>{{ item.iconTitle }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
  
<script>
  export default {
    name: 'GoodsNav',
    data () {
      return {
        NavList: []
      }
    },
    methods: {
      gteNav () {
        this.$http.get ('/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=20188410203678790').then(res => {
          this.NavList = res.data.navigatorIcon
        })
      }
    },
    mounted () {
      this.gteNav()
    }
  } 

</script>

<style lang="scss">
  .goods-nav {
    width: 3.75rem;
    height: 2.07rem;
    display: flex;
    ul {
      width: 100%;
      height: 100%;
      li {
        float: left;
        display: inline;
        a {
          width: 0.93rem;
          height: 1.03rem;
          display: block;
          text-align: center;
          padding: 10px 0 10px;
          img {
            width: 0.48rem;
            height: 0.48rem;
            margin-left: 0.22rem;
          }
          p {
            padding: 0.1rem 0;
            line-height: 1.4;
            color: #777;
            font-size: 0.16rem;
          }
        }
      }
    }
  }


</style>