<template>
    <div class="nav">
        <div class="navSize">
            <div class="navFix">
                <!--一级导航-->
                <div class="navFirst">
                    <ul>
                        <li>
                            <a href="#" target="_blank" data-hide="true">新闻</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" data-hide="true">图片</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" data-mouseover=0>赛程</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" data-mouseover=1>数据</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" data-hide="true">球员</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" data-hide="true">球队直达</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" data-hide="true">德国</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" data-hide="true">荐彩</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" data-hide="true">豪门会客厅</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" data-hide="true">冠军德易制</a>
                        </li>
                    </ul>
                </div>
                <!--二级导航-->
                <div class="navSecond">
                    <!--赛程-->
                    <div>
                        <ul>
                            <li>
                                <a href="#" target="_blank">小组赛程</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">淘汰赛对阵</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">豪门赛程</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a href="#" target="_blank">积分榜</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">球队汇总</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">球员汇总</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">球队排行</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">球员排行</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="head_sub">
                    <a href="#" class="back_btn" target="_blank">我的首页</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        components: {},
        methods: {},
        computed: {},
        watch: {},
        mounted() {
            require('../assets/js/jquery-3.2.1');
            var $nav=$(".navFix");
            var $navFirst=$(".navFirst");
            var $navSecond=$(".navSecond");
// 导航
            $navFirst.children()
                .addClass("area clear_float")
                .children()
                .addClass("navList float_left");
            $navSecond.css("top","-260px")
                .children()
                .addClass("navSecondSub")
                .children()
                .addClass("area areaText clear_float");
            $nav.on("mouseover","[data-mouseover]",function(){
                var val=parseInt($(this).attr("data-mouseover"));
                $navSecond.css("top","35px");//.css("z-index","98");
                var $n=$($navSecond.children()[val]);
                $n.css("display","").siblings().css("display","none");
            });
            $nav.on("mouseleave","",function(){
                $navSecond.css("top","-260px");
            });
            $nav.on("mouseenter","[data-hide]",function(){
                $navSecond.css("top","-260px");
            });
// 导航栏滚动事件
            var $navp = $(".nav");
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                if($navp.offset().top <= scrollTop)
                    $nav.addClass("fixed");
                else
                    $nav.removeClass("fixed");
            });
        }
    }
</script>

<style scoped>

</style>