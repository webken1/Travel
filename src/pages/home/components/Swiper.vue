<template>
    <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-img" >
            <swiper-slide v-for="item in SwiperList" :key="item.id">
                <img :src="item.imgUrl" />
            </swiper-slide>
            
            <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
    name:'HomeSwiper',
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true //支持循环轮播
            },
            SwiperList:[
                {
                    id:'001',
                    imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
                },
                {
                    id:'002',
                    imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/e440c31af79c0b9d1a1e84c577205562.jpg_750x200_0729c45b.jpg'
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
            background:#fff
.wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:26%
    
    .swiper-img img
        width:100%
        
</style>
