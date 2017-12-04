// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
// import VResource from 'vue-resource'
import routes from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.use(VRouter)
// Vue.use(VResource)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  routes,
  template: '<App/>',
  components: { App }
})
