import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick' //安装并导入fastclick这个插件解决移动端延迟300秒问题
import 'styles/reset.css'  //重置样式
import 'styles/border.css' //解决1像素边框
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
fastClick.attach(document.body)  //使用fastclick

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
