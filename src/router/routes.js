import Home from '../views/Home.vue'
import pages from './pages'
import dashboards from './dashboards'

export default [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  ...dashboards,
  ...pages,
]
