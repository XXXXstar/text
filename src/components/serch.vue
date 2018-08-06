<template>
    <div class="app-serch">
        <div class="hea_serch">
           <div class="table_v_c">
                <div class="cityshow">北京<!-- <i class="i_block i_city"></i> --></div>
                <p class="input td"><a href="#!/search/"><span>影片/影院/影人，任你搜</span></a></p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name : 'AppSerch'
    }
</script>

<style lang="scss" scoped>
        .app-serch{
            width:100%;
            height:0.61rem;
            .hea_serch{
                background: #f6f6f6;
                height:0.61rem;
                padding: .8em 1.5em .75em;
                border-bottom: 1px solid #d8d8d8;
                display:flex;
              .table_v_c{
                height: 100%;
                width:100%;
                display:flex;
                .cityshow{
                        margin-right: 1.5em;
                        height: 0.42rem;
                        line-height: 3.5em;
                        width:0.51rem;;
                        font-size: 1.6em;
                        font-weight: normal;
                        display: inline-block;
                        vertical-align: middle;
                        line-height:0.4rem;
                }
                .input{
                    margin-left: 0;
                    font-size: 1.4em;
                    width:2.68rem;
                    height:0.37rem;
                    line-height: 1.2;
                    padding: 0 1.8em 0 2em;
                    border-radius: .5em;
                    background: #fff url(http://static1.mtime.cn/html5/20180727153608/images/2014/search_ico_01.png) no-repeat .5em center;
                    background-size: 1.3em 1.3em;
                    position: relative;
                    z-index: 0;
                    a{
                        display:block;
                        width:100%;
                        height:100%;
                        span{
                            display:block;
                            width:100%;
                            height:100%;
                            display: inline-block;
                            vertical-align: middle;
                            color: #777;
                            line-height: 0.4rem;
                            font-size: 1em;
                        }
                    }
                }
              }
            }
        }
</style>

