<template>
    <div class="topnews">
        <div class="topnews_body">
            <ul v-for="(val1,i1) in box" class="topnews_lists" :key="i1">
                <li v-for="(val2,i2) in val1" :class="i2==0?'first':''" :key="i2">
                    <a href="#" target="_blank">{{val2.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "ModTopnews",
        data() {
            return {
                list: [],
                box: []
            }
        },
        mounted() {
            var url = `http://127.0.0.1:3000/newstop`;
            axios.get(url).then((res) => {
                for(var j=0;j<3;j++){
                    for(var i=0;i<5;i++){
                        this.list.push(res.data.msg[Math.floor(Math.random()*10)]);
                    }
                    this.box.push(this.list);
                    this.list=[];
                }
                console.log(this.box);
            }).catch((err) => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>