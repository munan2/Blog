import Home from '../components/home'
import ArticleList from '../components/article-list'
import ArticleEdit from '../components/article-edit'
import Login from '../components/login'

const routers = [
	{
		path: '/',
		// component: Home
		redirect: '/home/show',
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
			}
		]
	},
	{
		path: '/login',
		component: Login
	}
]
export default routers