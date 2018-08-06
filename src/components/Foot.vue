<template>
  <div class="foot">
    <ul>
      <li v-for = "itme in foot_nav"><a href="">{{ itme }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      foot_nav: ['首页', '购票', '商城', '发现', '我的']
    }
  }
}

</script>

<style lang = 'scss'>
  .foot {
    width: 3.75rem;
    height: 0.5rem;
    display: flex;
    ul {
      display: flex;
      margin: 0 auto;
      li {
        text-align: center;
        line-height: 0.5rem;
        a {
          width: 0.75rem;
          display: block;
          font-size: 0.18rem;
          color: #0074c5;
        }
      }
    }
  }
</style>