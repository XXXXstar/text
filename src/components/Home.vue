<template>
  <div class="app-home-top">
    <ul>
      <li class="top-logo">
        <img src="//static1.mtime.cn/html5/20180727153608/images/2014/logo_mtime.png" alt="" />
      </li>
      <li class="top-nav" v-for = 'item in nav'>{{ item }}</li>
      <li class="top-ico">
        <img src="//static1.mtime.cn/html5/20180727153608/images/2014/ico_my.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppHomeTop',
  data () {
    return {
     nav: [ '首页', '购票', '商城', '发现' ]
    }
  }
}

</script>

<style lang = "scss">
  .app-home-top {
    width: 100%;
    height: 0.528rem;
    ul {
      background-color:#1c2635;
      display: flex;
    }
    .top-logo {
      width: 0.95rem;
      height: 0.528rem;
      text-align: center;
      img{
        width: 5.6em;
        height: 1.8em;
        background-size: contain;
        display: inline-block;
        vertical-align: middle;
        margin-top: 0.13rem;
      }
    }
    .top-nav {
      float: left;
      width: 0.58rem;
      height: 0.528rem;
      color: #fff;
      position: relative;
      font-weight: bold;
      text-align: center;
      line-height: 0.528rem;
    }
    .top-ico {
      width: 0.45rem;
      height: 0.528rem;
      text-align: center;
      line-height: 0.528rem;
      img{
        width: 1.4em;
        height: 1.8em;
        display: inline-block;
        vertical-align: middle;
        background-size: cover;
      }
    }
  }
</style>
