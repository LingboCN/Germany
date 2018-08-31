<template>
    <div class="germany_player_block">
        <div class="germany_player">
            <div class="germany_player_tit">球员统计</div>
            <div class="germany_player_con">
                <div class="germany_player_box">
                    <table class="germany_player_table">
                        <colgroup>
                            <col class="player_list1">
                            <col class="player_list2">
                            <col class="player_list3">
                            <col class="player_list4">
                            <col class="player_list5">
                            <col class="player_list6">
                            <col class="player_list7">
                            <col class="player_list8">
                            <col class="player_list9">
                            <col class="player_list10">
                            <col class="player_list11">
                            <col class="player_list12">
                            <col class="player_list13">
                            <col class="player_list14">
                            <col class="player_list15">
                        </colgroup>
                        <thead>
                        <tr>
                            <th>号码</th>
                            <th>球员</th>
                            <th>位置</th>
                            <th>出场</th>
                            <th>时间</th>
                            <th>进球</th>
                            <th>助攻</th>
                            <th>射门</th>
                            <th>射正</th>
                            <th>犯规</th>
                            <th>抢断</th>
                            <th>黄牌</th>
                            <th>红牌</th>
                            <th>扑球</th>
                            <th>失球</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(val,i) in playerList" :key="i">
                            <td>{{val.mid}}</td>
                            <td><a href="#" target="_blank">{{val.cname}}</a></td>
                            <td>{{val.mposition==0?'中场':val.mposition==1?'前锋':val.mposition==2?'中场':'后卫'}}</td>
                            <td>{{val.appearances}}</td>
                            <td>{{val.playingtime}}</td>
                            <td>{{val.goal}}</td>
                            <td>{{val.assists}}</td>
                            <td>{{val.shoot}}</td>
                            <td>{{val.ontarget}}</td>
                            <td>{{val.fouls}}</td>
                            <td>{{val.steals}}</td>
                            <td>{{val.ycard}}</td>
                            <td>{{val.rcard}}</td>
                            <td>{{val.saves}}</td>
                            <td>{{val.fumble}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="show_more"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "GermanyPlayer",
        data(){
            return {
                playerList: {}
            }
        },
        methods: {
            loadPlayer(){
                var url = `http://127.0.0.1:3000/player`;
                axios.get(url).then((res)=>{
                    this.playerList = res.data.msg;
                }).catch((err)=>{
                    console.log(err);
                })
            }
        },
        mounted(){
            require('../assets/js/jquery-3.2.1');
            var $show = $(".germany_player_con");
            $show.on("click","div.show_more",function(){
                $show.toggleClass("current");
            });
            this.loadPlayer();
        }
    }
</script>

<style scoped>

</style>