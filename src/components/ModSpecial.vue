<template>
    <div class="special">
        <div class="top_line"></div>
        <div class="special_body">
            <div class="special_scroll clear_float">
                <div v-for="(val1,i1) in box" class="special_page" :key="i1">
                    <ul>
                        <li v-for="(val2,i2) in val1" :class="i2==isChecked?'cell cell_hover':'cell'" :key="i2" @mouseenter="show(i2)">
                            <p class="tag_line">
                                <span></span>
                            </p>
                            <div class="column_main">
                                <a href="#" target="_blank" class="detail">
                                    <h3>{{val2.title}}</h3>
                                    <div class="photo">
                                        <img :src="require('../assets/'+val2.pic_sm)">
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="special_nav">
            <span class="current">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ModSpecial",
        data() {
            return {
                list: [],
                box: [],
                isChecked: 0
            }
        },
        methods: {
            show(i) {
                this.isChecked = i;
            }
        },
        mounted(){
            var url = `http://127.0.0.1:3000/newstop`;
            axios.get(url).then((res) => {
                for(var i=0;i<5;i++){
                    for(var j=0;j<4;j++){
                        this.list.push(res.data.msg[Math.floor(Math.random()*10)]);
                    }
                    this.box.push(this.list);
                    this.list=[];
                }
            }).catch((err) => {
                console.log(err);
            })
            // 左侧栏
            // var $cell = $(".cell");
            // $cell.hover(function(){
            //     var $li = $(this);
            //     console.log($li);
            //     $li.addClass("cell_hover").siblings().removeClass("cell_hover");
            // });
            var $specialNav = $(".special_nav");
            var $specialScroll = $(".special_scroll");
            $specialNav.on("click","span",function(){
                var $span = $(this);
                var i = $span.index();
                $specialScroll.animate({
                    left: -i*200
                },function(){
                    $span.addClass("current").siblings().removeClass("current");
                });
            });
            // var $leftFix = $(".col_l").last();
            // var $secondFloor = $("div.area.clear_float").last();
            // $(window).scroll(function(){
            //     var scrollTop = $(window).scrollTop();
            //     if($secondFloor.offset().top <= scrollTop)
            //         $leftFix.addClass("pl_fixed");
            //     else
            //         $leftFix.removeClass("pl_fixed");
            // });
        }
    }
</script>

<style scoped>
    /*左*/
    .top_line{
        height: 5px;
        background: url("../assets/img/icons.png") no-repeat -300px -300px;
    }
    .tag_line>span{
        display: block;
        width: 200px;
        height: 30px;
        background: url("../assets/img/logos2.png") no-repeat 0 -360px;
        line-height: 300px;
        overflow: hidden;
    }
    .special_body{
        width: 200px;
        overflow: hidden;
        position: relative;
    }
    .special_scroll{
        width: 1000px;
        position: relative;
        left: 0;
    }
    .special_page{
        width: 200px;
        float: left;
        overflow: hidden;
        position: relative;
    }

    .special_nav{
        margin-top: 25px;
        text-align: center;
    }
    .special_nav>span{
        display: inline-block;
        height: 20px;
        font: 16px/1 "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #333;
        padding: 0 20px 0 5px;
        background: url("../assets/img/icons.png") -179px -300px no-repeat;
        cursor: pointer;
    }
    .special_nav>span:last-child{
        background: transparent;
    }
    .special_nav>span.current{
        color: #fe4848;
    }
    .special_page li{
        padding: 15px 0 0;
        border-top: 1px solid #e6e6e6;
    }
    .special_page li .photo{
        width: 0;
        height: 0;
        overflow: hidden;
        transition: all .3s ease-in-out;
    }
    .special_page li.cell_hover .photo{
        width: 200px;
        height: 90px;
        margin-bottom: 15px;
    }
    .special_page li .tag_line{
        margin-bottom: 15px;
    }
    .special_page li h3{
        font: bold 16px/26px "Microsoft Yahei","Hiragino Sans GB","sans-serif";
        color: #333;
        margin-bottom: 10px;
    }
    .special_page li h3:hover{
        color: #fe4818;
    }
    .pl_fixed{
         position: fixed;
         top: 40px;
     }
</style>