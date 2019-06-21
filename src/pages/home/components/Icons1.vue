<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" />
            </div>
            <p class="icon-p">热门景点</p>
        </div>
      
        
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data(){
        return{

        }
    }
}
</script>
<style lang="stylus" scoped>
.icons
    height:0
    padding-bottom:50%

    overflow:hidden
    .icon
        position:relative
        width:25%
        float:left
        height:0
        padding-bottom:25%

        .icon-img
            position:absolute
            top:0
            left:0
            right:0
            bottom:.44rem

            overflow:hidden
            .icon-img-content
                display:block
                height:100%
                margin:0 auto
        .icon-p
            position:absolute
            left:0
            right:0
            bottom:0
            text-align:center
</style>
