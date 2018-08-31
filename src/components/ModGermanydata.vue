<template>
    <div class="germany_data">
        <div class="germany_data_body">
            <div class="data_tit">
                <div class="data_nav current">球员数据</div>
                <div class="data_nav">球队数据</div>
                <div></div>
            </div>
            <!--球员数据-->
            <div class="nav_f_main_con current">
                <div class="nav_s_bd clear_float">
                    <div class="nav_s current" @click="loadGermanyData('goal')">进球</div>
                    <div class="nav_s" @click="loadGermanyData('shoot')">射门</div>
                    <div class="nav_s" @click="loadGermanyData('assists')">助攻</div>
                    <div class="nav_s" @click="loadGermanyData('steals')">抢断</div>
                </div>
                <div class="nav_s_main">
                    <div class="nav_s_main_con current">
                        <div class="nav_s_main_con_box">
                            <table>
                                <colgroup>
                                    <col class="player_list1">
                                    <col class="player_list2">
                                    <col class="player_list3">
                                </colgroup>
                                <thead>
                                <tr>
                                    <th>排名</th>
                                    <th>球员</th>
                                    <th>数据</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(val,i) in germanyData" :key="i">
                                    <td><em :class="{'red':!i}">{{i+1}}</em></td>
                                    <td>
                                        <a href="#">
                                            <span class="img"><img :src="require('../assets/'+val.profile_sm)" width="30" height="30"></span>
                                            {{val.cname}}
                                        </a>
                                    </td>
                                    <td>{{val.data.toFixed(1)}}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <a class="under_more" href="#">查看更多</a>
                    </div>
                    <!--<div class="nav_s_main_con"></div>-->
                    <!--<div class="nav_s_main_con"></div>-->
                    <!--<div class="nav_s_main_con"></div>-->
                </div>
            </div>
            <!--球队数据-->
            <div class="nav_f_main_con" style="display: none">
                <div class="nav_s_main_con_box" style="height:259px">
                    <table class="team_data_table">
                        <colgroup>
                            <col class="team_list1">
                            <col class="team_list2">
                            <col class="team_list3">
                        </colgroup>
                        <thead>
                        <tr>
                            <th>排名</th>
                            <th></th>
                            <th>数据</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>进球</td>
                            <td></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>失球</td>
                            <td></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>射门</td>
                            <td></td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>传球</td>
                            <td></td>
                            <td>1979</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <a href="#" class="under_more" target="_blank">查看更多</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ModGermanydata",
        data(){
            return {
                germanyData: {}
            }
        },
        methods: {
            loadGermanyData(data){
                var url = `http://127.0.0.1:3000/germanydata?type=${data}`;
                axios.get(url).then((res)=>{
                    this.germanyData = res.data.msg;
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
        mounted(){
            require('../assets/js/jquery-3.2.1');
            var $bd = $(".nav_s_bd");
            $bd.on("click",".nav_s",function(){
                $(this).addClass("current").siblings().removeClass("current");
            });
            var $tit = $(".data_tit");
            var $main = $(".nav_f_main_con");
            $tit.on("mouseenter",".data_nav",function(){
                var $this = $(this);
                $this.addClass("current").siblings().removeClass("current");
                $main.eq($this.index()).addClass("current").css("display","");
                $main.eq(!$this.index()).removeClass("current").css("display","none");
            });
            this.loadGermanyData('goal');
        }
    }
</script>

<style scoped>
    /*球员数据*/
    .data_tit{
        height: 40px;
        background: url("../assets/img/index/data_tit.png") center top;
    }
    .data_tit .current{
        background: #333;
        font-weight: bold;
    }
    .data_nav{
        width: 150px;
        height: 40px;
        float: left;
        font: 16px/40px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
    .germany_data .nav_f_main_con{
        height: 316px;
        border: 1px solid #dcdcdc;
        border-top: none;
        padding: 0 15px;
        overflow: hidden;
    }
    .germany_data .nav_s_bd{
        position: relative;
        height: 38px;
        border-bottom: 1px solid #dcdcdc;
    }
    .germany_data .nav_s{
        width: 67px;
        float: left;
        font: 14px/38px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #555;
        text-align: center;
        cursor: pointer;
        position: relative;
    }
    .germany_data .nav_s.current:nth-child(1)~.nav_s:last-child::before{
        transform: translate3d(-300%,0,0);
    }
    .germany_data .nav_s.current:nth-child(2)~.nav_s:last-child::before{
        transform: translate3d(-200%,0,0);
    }
    .germany_data .nav_s.current:nth-child(3)~.nav_s:last-child::before{
        transform: translate3d(-100%,0,0);
    }
    .germany_data .nav_s:last-child::before{
        content: '';
        width: 100%;
        background: #fe3500;
        height: 5px;
        position: absolute;
        bottom: -1px;
        left: 0;
        transition: all .2s ease-in-out;
    }
    .germany_data .nav_s.current{
        font-weight: bold;
        color: #fe3500;
    }
    .germany_data .nav_s:hover{
        color: #fe3500;
    }
    .germany_data .nav_s_main_con{
        padding-top: 10px;
    }
    .under_more{
        display: block;
        width: 250px;
        height: 26px;
        background: #ff662a;
        font: 12px/26px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        text-align: center;
        color: #fff;
        border-radius: 13px;
        margin: 15px auto;
    }
    .under_more:hover{
        background: #fe3500;
    }
    .germany_data .nav_s_main_con_box{
        min-height: 210px;
    }
    .germany_data .player_list1,.germany_data .player_list3{
        width: 60px;
    }
    .germany_data .player_list2{
        width: 160px;
    }
    .germany_data th{
        font: 14px/42px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #999;
        text-align: center;
    }
    .germany_data td{
        height: 42px;
        font: 14px/42px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #555;
        text-decoration: none;
        text-align: center;
        overflow: hidden;
    }
    .germany_data td a{
        display: block;
        height: 42px;
        font: 14px/42px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #555;
        text-decoration: none;
        text-align: left;
        padding-left: 20px;
        overflow: hidden;
    }
    .germany_data td a:hover{
        color: #fe4818;
    }
    .germany_data .red{
        font: bold 20px/42px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #fe4818;
        font-style: italic;
    }
    .germany_data .img{
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        vertical-align: middle;
        overflow: hidden;
        margin-right: 8px;
    }
    .germany_data .team_list1,.germany_data .team_list3{
        width: 86px;
    }
    .germany_data .team_list2{
        width: 105px;
    }
    .germany_data .team_data_table th{
        line-height: 60px;
    }
</style>