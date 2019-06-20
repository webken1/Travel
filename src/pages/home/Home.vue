<template>
    <div id="home">
        <v-header/>
        <swiper></swiper>

    </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/Header.vue'
import HomeSwiper from '@/pages/home/components/Swiper.vue'
export default {
    data(){
        return{

        }
    },components:{
        'v-header':HomeHeader,
        'swiper':HomeSwiper
    }
}
</script>
<style>

</style>
