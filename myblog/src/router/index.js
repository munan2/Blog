import Home from '../components/home'
import ArticleList from '../components/article-list'
import ArticleEdit from '../components/article-edit'

console.log('router')
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
	}
]
export default routers