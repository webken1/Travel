<template>
    <div id="home">
        <v-header/>
        <swiper></swiper>
        <icons></icons>
    </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header.vue'
import HomeSwiper from '@/pages/home/components/Swiper.vue'
import HomeIcons from '@/pages/home/components/Icons.vue'
export default {
    data(){
        return{

        }
    },components:{
        'v-header':HomeHeader,
        'swiper':HomeSwiper,
        'icons':HomeIcons
    }
}
</script>
<style>

</style>
