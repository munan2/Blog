import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Welcome from '@/components/welcome'
Vue.use(Router)
const routes = [
    {
      	path: '/',
      	component: Index,
      	redirect: '/welcome/all',
      	children: [
			{
				path: 'welcome/:tag',
				component: Welcome
			}
		]
    }
]
export default routes
