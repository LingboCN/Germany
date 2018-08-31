<template>
    <div class="datalist_germany">
        <div class="newsdata_wrap">
            <!--导航部分-->
            <div class="newsdata_nav">
                <ul class="clear_float">
                    <li class="nav_item current">最新动态</li>
                    <li class="nav_item">图集</li>
                </ul>
            </div>
            <!--内容部分-->
            <div class="newsdata_list">
                <!--最新动态-->
                <div class="newsdata_item">
                    <div class="ndi_main">
                        <div v-for="(val,i) in list" class="data_row news_article clear_float">
                            <a href="#" class="na_pic">
                                <img :src="require('../assets/'+val.pic_sm)" :alt="val.title" width="140" height="88">
                            </a>
                            <div class="na_detail clear_float">
                                <div class="news_title">
                                    <h3>
                                        <a href="#">{{val.title}}</a>
                                    </h3>
                                </div>
                                <div class="news_tag">
                                    <strong class="barlink">
                                        <a href="#" class="link">世界杯</a>
                                    </strong>
                                    <div class="keywords">
                                        <a href="#">厄齐尔</a>
                                        <a href="#">太委屈</a>
                                        <a href="#">足协</a>
                                    </div>
                                    <span class="time">1个月前</span>
                                </div>
                                <div class="share_join clear_float">
                                    <a href="#" class="post_recommend_tie">
                                        <div class="post_recommend_tie_wrap">
                                            <span class="post_recommend_tie_icon">1574</span>
                                            <span class="post_recommend_tie_text">
                                                            <i>跟帖</i>1574
                                                        </span>
                                        </div>
                                    </a>
                                    <div href="#" class="share_join_tab">
                                        <span class="share-menu icons"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "GermanyDatalist",
        data() {
            return {
                list: []
            }
        },
        mounted() {
            var url = `http://127.0.0.1:3000/newstop`;
            axios.get(url).then((res) => {
                this.list = res.data.msg;
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>