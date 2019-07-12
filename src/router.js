import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import CountUp from './views/CountUp.vue' //viewsのCountUpを読み込む
import CountDown from './views/CountDown.vue'//viewsのCountDownを読み込む

Vue.use(Router)

export default new Router({
  // 'CountUp'、'CountDown'を結ぶデータを設定
  routes: [
    {
      path: '/countUp',
      name: 'CountUp',
      component: CountUp
    },
    {
      path: '/countDown',
      name: 'CountDown',
      component: CountDown
    }
  ]
})