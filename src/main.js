// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import EUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "assets/iconfont/iconfont.css"
import 'assets/common.styl'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(EUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
