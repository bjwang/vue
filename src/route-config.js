import Home from './components/home.vue'
import About from './components/about.vue'
import Title from './components/title.vue'
import File from './components/file.vue'
import ArticleDetail from './components/article.detail.vue'
import reg from './components/reg.vue'
import login from './components/login.vue'

export default {
	'/': {
		name: 'index',
		component: Home
	},
	'/home': {
		name: 'index',
		component: Home
	},
	'/about': {
		name: 'about',
		component: About,
		subRoutes: {
			'/title': {
				component: Title
			}
		}
	},
	'/about/file': {
		name: 'file',
		component: File
	},
	'/article/:id': {
		name: 'article',
		component: ArticleDetail
	},
	'/reg':{
		name: 'reg',
		component: reg
	},
	'/login':{
		name: 'login',
		component: login
	}
}
