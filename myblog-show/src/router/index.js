import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Welcome from '@/components/welcome'
import Detail from '@/components/detail'
import Author from '@/components/author'
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
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/author/:id',
      component: Author
    }
]
export default routes
