// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import moment from 'moment'
import Home from './components/home'
import VRouter from 'vue-router'
import App from './App'
import VResource from 'vue-resource'
import routes from './router/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(VRouter)
Vue.use(VResource)
Vue.use(ElementUi)
console.log(routes);
const router = new VRouter({
  mode: 'history',
  routes
})
new Vue({
 el: '#app',
 router,
 render: h => h(App)
});
