<template>
    <div class="carousel">
        <div class="area">
            <div class="carousel_body">
                <div class="carousel_scroll clear_float">
                    <div class="carousel_page current">
                        <div v-for="(val,i) in news" :class="i==0?'big_one':'small_one'" v-if="i<3">
                            <a href="#" target="_blank">
                                <img :src="require('../assets/'+val.md)" alt="#">
                            </a>
                            <h2>
                                <a href="#" target="_blank">{{val.title}}</a>
                            </h2>
                        </div>
                        <!--<div class="small_one">-->
                            <!--<a href="#" target="_blank">-->
                                <!--<img src="img/carousel/md/2/a153aacf8f4a447e8fb3233b3610cb05.jpeg" alt="#">-->
                            <!--</a>-->
                            <!--<h2>-->
                                <!--<a href="#" target="_blank">魔咒缠身!卫冕冠军连续3届小组出局</a>-->
                            <!--</h2>-->
                        <!--</div>-->
                        <!--<div class="small_one">-->
                            <!--<a href="#" target="_blank">-->
                                <!--<img src="img/carousel/md/3/f43fba0ce03840438e2d17e588b6a717.jpeg" alt="#">-->
                            <!--</a>-->
                            <!--<h2>-->
                                <!--<a href="#" target="_blank">太刺激!克罗斯读秒绝杀 德国2-1瑞典</a>-->
                            <!--</h2>-->
                        <!--</div>-->
                    </div>
                    <div class="carousel_page">
                        <div v-for="(val,i) in news" :class="i==3?'big_one':'small_one'" v-if="i>2">
                            <a href="#" target="_blank">
                                <img :src="require('../assets/'+val.md)" alt="#">
                            </a>
                            <h2>
                                <a href="#" target="_blank">{{val.title}}</a>
                            </h2>
                        </div>
                        <!--<div class="small_one">-->
                            <!--<a href="#" target="_blank">-->
                                <!--<img src="img/carousel/md/2/a153aacf8f4a447e8fb3233b3610cb05.jpeg" alt="#">-->
                            <!--</a>-->
                            <!--<h2>-->
                                <!--<a href="#" target="_blank">魔咒缠身!卫冕冠军连续3届小组出局</a>-->
                            <!--</h2>-->
                        <!--</div>-->
                        <!--<div class="small_one">-->
                            <!--<a href="#" target="_blank">-->
                                <!--<img src="img/carousel/md/3/f43fba0ce03840438e2d17e588b6a717.jpeg" alt="#">-->
                            <!--</a>-->
                            <!--<h2>-->
                                <!--<a href="#" target="_blank">太刺激!克罗斯读秒绝杀 德国2-1瑞典</a>-->
                            <!--</h2>-->
                        <!--</div>-->
                    </div>
                </div>
            </div>
            <div class="carousel_indicator">
                <span class="current"></span>
                <span></span>
            </div>
            <a class="arrow_prev" href="#"></a>
            <a class="arrow_next" href="#"></a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                news: [],
            }
        },
        components: {},
        methods: {},
        computed: {},
        watch: {},
        mounted() {
            var url = `http://127.0.0.1:3000/carousel`;
            axios.get(url).then((res) => {
                this.news = res.data.msg;
                console.log(this.news);
            }).catch((err) => {
                console.log(err);
            });
            require('../assets/js/jquery-3.2.1');
            var $matchbar=$(".matchbar");
            var LIWIDTH=1200,moved=0,interval=500,wait=4000;
            var cmoved = 0;
            // 比赛轮播
            $matchbar.children()
                .children()
                .addClass("matchbar_scroll")
                .children("div")
                .addClass("matchbar_body clear_float")
                .children()
                .addClass("matchbar_page float_left");
            $matchbar.find("a").first().addClass("arrow_prev").next().addClass("arrow_next");
            var $matchBody=$(".matchbar_body");
            $matchbar.on("click","a",function(e){
                e.preventDefault();
                var $a=$(this);
                if($a.is(".arrow_prev"))
                    moved=moved<=0?2:moved-1;
                else
                    moved=moved>=2?0:moved+1;
                $matchBody.stop(true).animate({
                    left:-moved*LIWIDTH
                },interval)
            });
            // 新闻轮播
            var $carousel = $(".carousel_scroll");
            var $indicator = $(".carousel_indicator");
            $indicator.on("click","span",function(){
                var $span = $(this);
                cmoved = $span.index();
                $carousel.stop(true).animate({
                    left : -cmoved*LIWIDTH
                },function(){
                    $span.addClass("current").siblings().removeClass("current");
                })
            });
            function move(){
                if(cmoved==0)
                    cmoved=1;
                else
                    cmoved=0;
                $carousel.stop(true).animate({
                    left : -cmoved*LIWIDTH
                },function(){
                    $indicator.children(":eq("+cmoved+")").addClass("current").siblings().removeClass("current")
                })
            }
            function autoMove(){
                window.timer = setInterval(function(){
                    // if(cmoved==0)
                    //     cmoved=1;
                    // else
                    //     cmoved=0;
                    // $carousel.animate({
                    //     left : -cmoved*LIWIDTH
                    // },function(){
                    //     $indicator.children(":eq("+cmoved+")").addClass("current").siblings().removeClass("current")
                    // })
                    move();
                },wait+interval)
            }
            autoMove();
            var $carouselBody = $(".carousel>.area");
            $carouselBody.hover(function(){
                clearInterval(timer);
                timer = null;
            },function(){
                autoMove();
            });
            var $aRight = $(".arrow_next");
            var $aLeft = $(".arrow_prev");
            $aRight.click(function(e){
                e.preventDefault();
                move();
            });
            $aLeft.click(function(e){
                e.preventDefault();
                move();
            });
        }
    }
</script>

<style scoped>

</style>