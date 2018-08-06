<template>
    <div class="hotPoints">
        <h2><a href="javascript:void(0)"><b>今日热点</b></a></h2>
        <ul class="hotPoint">
            <li 
                v-for = "item in Hotpoints"
            >
                <div class="todaypic">
                    <a href="">
                        <img :src="item.img"/>
                    </a>
                </div>
                <div class="todaytxt">
                    <h2><a href="#!/news/movie/1582731/">{{item.title}}</a></h2><p><span>{{item.desc}}</span></p><p><time>2018-07-28 16:57:42</time></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/javascript">

    export default {
        name : 'AppPoints',
        data () {
            return{
            Hotpoints : []
            }
        },
        methods : {
            getPoints(){
                this.$http.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=20188319484433246').then(res=>{
                        this.Hotpoints = res.data.hotPoints;
                })


            }
        },
        mounted(){
            this.getPoints();
        }

    }
</script>

<style lang="scss">
    .hotPoints{
        padding: .5em 1.5em 0;
        h2{
            position: relative;
            a{
                display: block;
                line-height: 2;
                b{
                    font-size: 1.8em;
                    font-weight:bold;
                }
            }
        }
        .hotPoint{
            li{
                border-bottom: 1px solid #d8d8d8;
                padding: 1.3em 0 1.3em 0;
                display:flex;
                .todaypic{
                    margin-right: 1em;
                    width: 11.2em;
                    a{
                        display: block;
                        overflow: hidden;
                        height: 8em;
                        img{
                            width: 100%;
                            height: auto;
                            display: block;
                        }
                    }
                }
                .todaytxt{
                        h2{
                            padding: 0 0 .4em 0;
                            a{
                                font-size: 0.8em;
                                line-height: 1.1;
                                font-weight:bold;
                            }
                        }
                        p{
                            padding: .4em 0;
                            span{
                                font-size: 0.6em;
                                color: #777;
                            }
                        }
                        p{
                            time{
                                font-size: 0.6em;
                                color: #999;
                            }
                        }
                }
            }
        }
    }
</style>