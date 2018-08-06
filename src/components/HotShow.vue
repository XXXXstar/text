<template>
    <div class="hot-show">
      <h2>
        <a>
          正在热映（42部）
          <img src="//static1.mtime.cn/html5/20180727153608/images/2014/i-tmore.png" alt="" />
        </a>
      </h2>
      <ul>
        <li 
          v-for = '(item,index) in hots' :key = 'item.id'
          v-if="index<8"
        >
          <a href="">
            <div class="mimg">
              <img :src="item.img" alt="" />
              <em class="m_score" v-if="item.r>-1"><i >{{ item.r}}</i></em>
            </div>
            <p><span>{{ item.t }}</span></p>
          </a>
        </li>
      </ul>
      <h2>
        <a>
          即将上映（71部）
          <img src="//static1.mtime.cn/html5/20180727153608/images/2014/i-tmore.png" alt="" />
        </a>
      </h2>
      <div class="bimg">
        <p></p>
        <img src="http://img5.mtime.cn/mg/2018/07/31/143906.61810640.jpg" alt="" />
      </div>
    </div>
</template>

<script>
  export default {
    name: 'HotShow',
    data () {
      return {
        hots: []
      }
    },
    methods: {
      getHots () {
        this.$http.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2018831730414330').then(res => {
          this.hots = res.data.ms
        })
      }
    },
    mounted () {
      this.getHots()
    }
  } 

</script>

<style lang = 'scss'>
  .hot-show {
    display: flex;
    padding: 0.06rem 0.1rem 0.1rem;
    width: 100%;
 
    flex-wrap: wrap;
    margin:0;
    h2 {
      box-sizing: border-box;
      color: #333;
      display: block;
      height: 0.42rem;
      position: relative;
      padding-left: 0.07rem;
      a {
        width: 3.39rem;
        height: 0.42rem;
        display: block;
        line-height: 0.42rem;
        font-size: 0.22rem;
        color: #333;
        font-weight: bold;
        img {
          display: block;
          width: 0.17rem;
          height: 0.09rem;
          position: absolute;
          right: 0;
          top: 135%;
          margin-top: -0.4rem;
          overflow: hidden;
          transform: rotate(-90deg);
        }
      }
    }
    ul {
      display: flex;
      width: 100%;
      height: 3.5rem;
      flex-flow: wrap;
      margin:0 auto;
      padding-left:0.1rem;
      border-bottom: 1px solid #ddd;
      li {
        float: left;
        display: inline;
        width: 0.74rem;
        height: 1.75rem;
        text-align: center;
        margin-right: 0.1rem;
        .mimg {
            position: relative;
            width: 0.78rem;
            height: 1.18rem;
            img {
              height: 100%;
              width: 100%;
              border: 0;
              border: 1px solid #ddd;
            }
            .m_score {
                background: #659d0e;
                width: 2em;
                height: 1.8em;
                color: #fff;
                border-radius: 0;
                display: inline-block;
                vertical-align: middle;
                overflow: hidden;
                line-height: 1.8em;
                text-align: center;
                position: absolute;
                right: .3em;
                top: .3em;
            }
        }
      }
      p {
          padding: .5em 0 0;
          width: 7em;
          margin-bottom: 1em;
          height: 3.8em;
          overflow: hidden;
          span {
              font-size: 1.4em;
              line-height: 1.2;
          }
      }
    }
    .bimg {
      width: 3.75rem;
      p {
        height: 1.2em;
        background: #f6f6f6;
      }
      img {
        width: 100%;
      }
    }
  }
</style>