import Home from '../components/home'
import ArticleList from '../components/article-list'
import ArticleEdit from '../components/article-edit'
import Login from '../components/login'
import Index from '../components/index'
import Regist from '../components/regist'
import Usercenter from '../components/usercenter'
import Settings from '../components/settings'
const routers = [
	{
		path: '/',
		// component: Home
		redirect: '/index/login',
	},
	{
		path: '/home/',
		component: Home,
		children: [
			{
				path: 'show',
				// name: 'list',
				component: ArticleList
			}, {
				path: 'edit',
				// name: 'edit',
				component: ArticleEdit
			}, {
				path: 'setting',
				component: Settings
			}, {
				path: 'user',
				component: Usercenter
			}
		]
	},
	{
		path: '/index/',
		component: Index,
		redirect: '/index/login',
		children: [
			{
				path: 'login',
				// name: 'list',
				component: Login
			}, {
				path: 'regist',
				// name: 'edit',
				component: Regist
			}
		]
	}
]
export default routers