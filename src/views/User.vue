<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>
    .container {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        background: url("../assets/img/user/background_02.jpg") no-repeat;
        background-size: cover;
        color: #fff;
        font-family: "Microsoft Yahei","Hiragino Sans GB", sans-serif;
        position: absolute;
    }
</style>