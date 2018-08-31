<template>
    <div  class="Germany">
        <banner-main></banner-main>
        <nav-main></nav-main>
        <carousel-match></carousel-match>
        <carousel-news></carousel-news>
        <div class="area clear_float" style="margin-bottom: 40px">
            <div class="col_l">
                <mod-special></mod-special>
            </div>
            <div class="col_m">
                <mod-topnews></mod-topnews>
            </div>
            <div class="col_r">
                <mod-teamstanding></mod-teamstanding>
                <mod-germanydata></mod-germanydata>
            </div>
        </div>
        <div class="area">
            <germany-player></germany-player>
        </div>
        <div class="area clear_float">
            <div class="col_l">
                <mod-special></mod-special>
            </div>
            <div class="col_m">
                <germany-datalist></germany-datalist>
            </div>
            <div class="col_r">
                <germany-groupby></germany-groupby>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/css/normalize.css'
    import '../assets/css/index.css'
    import BannerMain from '@/components/BannerMain'
    import NavMain from '@/components/NavMain'
    import CarouselMatch from '@/components/CarouselMatch'
    import CarouselNews from '@/components/CarouselNews'
    import ModSpecial from '@/components/ModSpecial'
    import ModTopnews from '@/components/ModTopnews'
    import ModTeamstanding from '@/components/ModTeamstanding'
    import ModGermanydata from '@/components/ModGermanydata'
    import GermanyPlayer from '@/components/GermanyPlayer'
    import GermanyDatalist from '@/components/GermanyDatalist'
    import GermanyGroupby from '@/components/GermanyGroupby'
    export default {
        data() {
            return {

            }
        },
        components: {
            BannerMain,
            NavMain,
            CarouselMatch,
            CarouselNews,
            ModSpecial,
            ModTopnews,
            ModTeamstanding,
            ModGermanydata,
            GermanyPlayer,
            GermanyDatalist,
            GermanyGroupby
        },
        methods: {

        },
        computed: {},
        watch: {},
        mounted() {
            require('../assets/js/jquery-3.2.1');

        }
    }
</script>

<style scoped>

</style>