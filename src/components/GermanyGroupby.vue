<template>
    <div>
        <div class="team_player_groupby">
            <div class="col_r_tit">
                <span>阵容<i></i></span>
            </div>
            <div class="team_player_groupby_con">
                <div class="nav_cons clear_float">
                    <div class="nav_con current" @click="loadPage(2)">中场</div>
                    <div class="nav_con" @click="loadPage(1)">前锋</div>
                    <div class="nav_con" @click="loadPage(3)">后卫</div>
                    <div class="nav_con" @click="loadPage(0)">守门员</div>
                </div>
                <div class="main_cons">
                    <div class="main_con">
                        <table>
                            <colgroup>
                                <col class="row1">
                                <col class="row2">
                                <col class="row3">
                            </colgroup>
                            <thead>
                            <tr>
                                <td>球衣</td>
                                <td>名字</td>
                                <td>年纪</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(val,i) in groupList" :key="i">
                                <td>{{val.mid}}</td>
                                <td>
                                    <a href="#" target="_blank">
                                                    <span class="img">
                                                        <img :src="require('../assets/'+val.profile_sm)">
                                                    </span>
                                        {{val.cname}}
                                    </a>
                                </td>
                                <td>{{val.age}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "GermanyGroupby",
        data(){
            return {
                groupList: {},
            }
        },
        methods: {
            loadPage(mposition){
                var url = `http://127.0.0.1:3000/groupby?mposition=${mposition}`;
                axios.get(url).then((res)=>{
                    this.groupList = res.data.msg;
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
        mounted(){
            require('../assets/js/jquery-3.2.1');
            this.loadPage(2);
            var $position = $(".nav_con");
            $position.click(function(){
                var $p = $(this);
                $p.addClass("current").siblings().removeClass("current");
            })
        }
    }
</script>

<style scoped>
    /*右*/
    .team_player_groupby{
        padding: 0 10px 20px;
        background: #f8f8f8;
    }
    .col_r .col_r_tit{
        padding-top: 4px;
        height: 34px;
        border-bottom: 5px solid #000;
    }
    .col_r .col_r_tit span{
        height: 34px;
        font: bold 16px/34px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        display: inline-block;
        position: relative;
    }
    .col_r .col_r_tit span i{
        position: absolute;
        height: 5px;
        left: 0;
        right: 0;
        bottom: -5px;
        background: #fe3500;
    }
    .team_player_groupby .nav_cons{
        width: 280px;
        height: 28px;
        border: 1px solid #dcdcdc;
        margin-top: 15px;
    }
    .team_player_groupby .nav_cons .nav_con {
        width: 70px;
        height: 28px;
        font: 14px/28px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #333;
        text-align: center;
        float: left;
        background: url("/static/img/icons.png") -600px -500px no-repeat;
        cursor: pointer;
    }
    .team_player_groupby .nav_cons .nav_con.current{
        background: #fe4818;
        font-weight: bold;
        color: #fff;
    }
    .team_player_groupby .row1 {
        width: 48px;
    }
    .team_player_groupby .row2 {
        width: 176px;
    }
    .team_player_groupby .row3 {
        width: 56px;
    }
    .team_player_groupby th {
        height: 47px;
        font: 14px/44px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #999;
        text-align: center;
    }
    .team_player_groupby td {
        font: 14px/42px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #555;
        text-align: center;
    }
    .team_player_groupby td a {
        display: block;
        font: 14px/42px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        height: 42px;
        color: #555;
        padding-left: 20px;
        text-align: left;
        overflow: hidden;
        /*text-overflow: ellipsis;*/
        /*display: -webkit-box;*/
        /*-webkit-line-clamp: 1;*/
        /*-webkit-box-orient: vertical;*/
    }
    .team_player_groupby td a:hover {
        color: #fe4818;
    }
    .team_player_groupby td .img {
        display: inline-block;
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 8px;
    }
    .team_player_groupby td .img>img{
        width: 30px;
        height: 30px;
    }
</style>