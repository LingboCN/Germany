<template>
    <div class="header_wrap">
        <div class="header_con fixed">
            <div class="header_bg">
                <!-- 一级导航 -->
                <ul class="area head_nav clearfix">
                    <li class="header_f_nav">
                        <a href="http://2018.163.com/special/2018worldcupnews/" target="_blank">新闻</a>
                    </li>
                    <li class="header_f_nav">
                        <a href="http://2018.163.com/pic/" target="_blank">图片</a>
                    </li>
                    <li class="header_f_nav" data-subnav="0">
                        <a href="http://data.2018.163.com/" target="_blank">赛程</a>
                    </li>
                    <li class="header_f_nav" data-subnav="1">
                        <a href="http://data.2018.163.com/player_rank.html#/rank" target="_blank">数据</a>
                    </li>
                    <li class="header_f_nav">
                        <a href="#" target="_blank">球队直达</a>
                    </li>
                    <li class="header_f_nav">
                        <a href="http://2018.163.com/france/" target="_blank">法国</a>
                    </li>
                    <li class="header_f_nav">
                        <a href="http://2018.163.com/germany/" target="_blank">德国</a>
                    </li>
                    <li class="header_f_nav">
                        <a href="https://hongcai.163.com/" target="_blank">荐彩</a>
                    </li>
                    <li class="header_f_nav">
                        <a href="http://2018.163.com/special/haomenhuiketing/" target="_blank">豪门会客厅</a>
                    </li>
                    <li class="header_f_nav">
                        <a href="http://2018.163.com/special/guanjundeyizhi/" target="_blank">冠军德易制</a>
                    </li>
                    <li class="header_f_nav"><a href="http://www.163.com/" target="_blank">德国队首页</a></li></ul>
            </div>
            <div class="head_sub_con" style="top: -515px">
                <!--赛程-->
                <div class="header_sub_nav">
                    <ul class="area header_nav_txt clear_float">
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
                <div class="header_sub_nav">
                    <ul class="area header_nav_txt clear_float">
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
            <a class="header_icon" href="#" target="_blank"></a>
            <a class="germany_index" href="#" target="_blank"></a>
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
            var $nav = $(".header_con");
            var $navSub = $(".head_sub_con");
            $nav.on("mouseenter","[data-subnav]",function(){
                var $a = $(this);
                var i = $a.attr("data-subnav");
                $navSub.css("top","55px");
                $navSub.children(":eq("+i+")").show().siblings().hide();
            });
            $nav.on("mouseleave",$navSub,function(){
                $navSub.css("top","-515px");
            });
            $nav.on("mouseenter","[data-hide]",function(){
                $navSub.css("top","-515px");
            });
        }
    }
</script>

<style scoped>
    .header_wrap {
        position: relative;
        height: 55px;
    }
    .header_wrap .header_con.fixed {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        z-index: 999;
        -webkit-animation: bounceInDown 0.8s;
        -moz-animation: bounceInDown 0.8s;
        -ms-animation: bounceInDown 0.8s;
        -o-animation: bounceInDown 0.8s;
        animation: bounceInDown 0.8s;
    }
    .header_wrap .header_bg {
        height: 55px;
        background: url("../assets/img/nav/head_bg.jpg") no-repeat;
        background-size: cover;
        position: relative;
        z-index: 4;
    }
    .area{
        width: 1200px;
        margin: 0 auto;
    }
    .header_wrap .header_f_nav {
        width: 100px;
        height: 55px;
        float: left;
        font: 16px/55px "Microsoft Yahei", "Hiragino Sans GB", "sans-serif";
        color: #ffffff;
        cursor: pointer;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    .header_wrap .header_f_nav a{
        display: block;
        font: 16px/55px "Microsoft Yahei", "Hiragino Sans GB", "sans-serif";
        color: #ffffff;
        text-align: center;
    }
    .header_wrap .header_f_nav.select a, .header_wrap .header_f_nav:hover a {
        font-weight: bold;
        text-align: center;
    }
    .header_wrap .header_f_nav.select, .header_wrap .header_f_nav:hover {
        background: url("../assets/img/icons.png") -200px 0px no-repeat;
    }
    .header_wrap .head_sub_con {
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        position: absolute;
        left: 0px;
        /*top: -515px;*/
        right: 0px;
    }
    .header_wrap .header_sub_nav {
        width: 100%;
        background: url("../assets/img/nav/header_sub_nav.png") no-repeat center;
        background-size: cover;
        position: absolute;
        left: 0px;
        top: 0px;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .header_wrap .header_nav_txt {
        padding: 26px 0px;
    }
    .header_wrap .header_nav_txt li {
        display: inline-block;
        float: left;
        overflow: hidden;
        margin-right: 50px;
    }
    .header_wrap .header_nav_txt li a {
        font: 16px/28px "Microsoft Yahei", "Hiragino Sans GB", "sans-serif";
        color: #ffffff;
        display: inline-block;
    }
    .header_wrap .header_nav_txt li:hover a {
        text-decoration: underline;
    }
    .header_wrap .header_icon {
        position: absolute;
        top: 0px;
        left: 50%;
        margin-left: -920px;
        width: 234px;
        height: 84px;
        background: url("../assets/img/nav/header_icon.png") no-repeat;
        z-index: 999;
    }
    .header_wrap .germany_index {
        display: block;
        width: 127px;
        height: 25px;
        background: url("../assets/img/icons.png") -900px -400px no-repeat;
        position: absolute;
        top: 15px;
        right: 20px;
        z-index: 5;
    }
    .header_wrap .germany_index:hover{
        background-position: -900px -450px;
    }
</style>