import Vue from 'vue'
//swiper css
import 'swiper/dist/css/swiper.min.css'

// 全局通用样式
import '../stylesheet/main.scss'

//rem
import computed_rem from './rem'
 //计算rem
computed_rem()

// axios

import axios from 'axios'
Vue.prototype.$http = axios

//filters

import './filters'

//全局组件




Vue.config.productionTip = false