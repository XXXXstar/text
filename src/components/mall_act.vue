<template>
    <div class="mallact">
        <div class="divTopic">
            <dl class="bg">
                <dd style="background-image: url(&quot;http://img5.mtime.cn/mg/2018/07/20/155300.52298962.jpg&quot;); display: none;"></dd>
            </dl>
        </div>
    </div>  

</template>

<script>
    export default {
        name : 'MallAct'
    }
</script>

<style lang="scss" scoped>
    .mallact{
        position: relative;
        zoom: 1;
        margin-bottom: 1.2rem;
        border-bottom: 1px solid #e5e4e4;
        box-shadow: 0 0.2em 0.2em rgba(51,51,51,0.01);
        background: white;
        z-index: 2;
        .divTopic{
            .bg{
                height: 12.7rem;
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                dd{
                    display: block;
                    background: url() no-repeat center 0;
                    background-size: 100% auto;
                    height: 12.7rem;
                    width: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            }
        }
    }
</style>