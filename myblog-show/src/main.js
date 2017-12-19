// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VRouter from 'vue-router'
import routes from './router/index'
import VResource from 'vue-resource'
Vue.use(VRouter)
Vue.use(iView)
Vue.use(VResource)
Vue.config.productionTip = false
const router = new VRouter({
	mode: 'history',
	routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
