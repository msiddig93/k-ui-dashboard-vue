import Home from '../views/Home.vue'
import pages from './pages'

export default [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  ...pages,
]
