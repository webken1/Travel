<template>
    <div class="icons">
        <swiper >
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
            
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data(){
        return{
            IconList:[
                {
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    desc:'景点门票'
                },
                {
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    desc:'一日游'
                },
                {
                    id:'0003',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    desc:'青岛必游'
                },
                {
                    id:'0004',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    desc:'游乐场'
                },
                {
                    id:'0005',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                    desc:'海洋馆'
                },
                {
                    id:'0006',
                    imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
                    desc:'崂山'
                },
                {
                    id:'0007',
                    imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/8671dfb53aecb10748c86b4c29971a14.png',
                    desc:'青岛动物园'
                },
                {
                    id:'0008',
                    imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e48e868a92b508a04da2a3bfdd35d4cd.png',
                    desc:'青啤博物馆'
                },
                {
                    id:'0009',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                    desc:'青岛极地'
                }
            ]
        }
    },
    computed:{
        pages (){
            const pages=[]
            this.IconList.forEach((item,index)=>{
                const page=Math.floor(index / 8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
    .icons >>> .swiper-container
        height :0
        padding-bottom:50%
     .icon
         position:relative
         overflow:hidden
         float:left
         width:25%
         height:0
         padding-bottom:25%
         
         .icon-img
             position:absolute
             top:0
             left:0
             right:0
             bottom:.44rem
             box-sizing:border-box
             padding:.1rem
             .icon-img-content
                 display:block
                 margin:0 auto
                 height :100%
         .icon-desc
             position:absolute
             left:0
             right:0
             bottom:0
             height .44rem
             line-height:.44rem
             color:$darkTextColor
             text-align:center
             ellipsis()  
</style>
