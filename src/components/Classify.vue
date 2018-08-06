<template>
<div>
  <div class="classify" v-for = "i in calsslist"> 
    <div class="table">
      <h2>
        <i></i>
        {{ i.name }} 
        <span>更多>></span> 
      </h2>
    </div>
    <div class="box">
      <div class="b-img">
        <a href="">
          <img :src="i.image" alt="" />
        </a>
      </div>
      <div class="b-nav">
        <ul>
          <li v-for = "j in i.subList">
            <img :src="j.image" alt="" />
            <h3>{{ j.title }}</h3>
            <p>￥2699</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Classify',
    data () {
      return {
        calsslist: []
      }
    },
    methods: {
      getClassify () {
        this.$http.get ('/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=20188414191552073').then(res => {
          console.log(res.data.category)
          this.calsslist = res.data.category
        })
      }
    },
    mounted () {
      this.getClassify()
    }
  }

</script>

<style lang="scss">
  .classify {
    width: 3.75rem;
    height: 3.80rem;
    display:flex;
    flex-direction: column;
    padding-bottom: 0.15rem;
    border-bottom: 15px solid #F1F1F1;
    .table {
      padding-top: 0.17rem;
      width: 100%;
      display: flex;
      h2 {
        font-size: 0.15rem;
        line-height: 0.1rem;
        position: relative;
        font-weight: normal;
        color: #FFB90F;
        width: 100%;
        display: flex;
        i {
          width: 0.06rem;
          height: 0.18rem;
          display: inline-block;
          position: relative;
          margin-right: 0.05rem;
          vertical-align: middle;
          overflow: hidden;
          background: #FFB90F;
        }
        span {
          font-size: 15px;
          color: #333;
          position: absolute;
          right: 20px;
        }
      }
    }
    .box {
  
      .b-img {
        border-bottom: 2px solid #ccc;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .b-nav {
        width: 100%;
        ul {
          width: 100%;
          height: 1.48rem;
          li {
            width: 1rem;
            height: 100%;
            text-align: center;
            float: left;
            margin-left: 23px;
            img {
              width: 85px;
              height: 85px;
            }
            h3 {
              padding: .064rem 0;
              font-size: 0.11rem;
              line-height: 0.12rem;
              font-weight: normal;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              margin: 0 0.05rem;
            }
            p {
              font-size: 0.12rem;
              color: #f15353;
            }
          }
        }
      }
    }
  }

</style>