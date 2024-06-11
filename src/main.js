import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 新加入的内容
// 全局引人入引入element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 引入Element UI样式

// 引入axios
// import axios from 'axios';





// 使用element--全局
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
