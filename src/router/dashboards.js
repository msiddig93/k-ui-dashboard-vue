import Default from '../views/dashboard/dashboards/Default.vue'
import ProjectManagement from '../views/dashboard/dashboards/ProjectManagement.vue'
import ECommerce from '../views/dashboard/dashboards/ECommerce.vue'

export default [
  {
    path: '/dashboard/dashboards/default',
    name: 'DefaultDashboard',
    component: Default,
    meta: { layout: 'AppLayout' },
  },
  {
    path: '/dashboard/dashboards/project-management',
    name: 'ProjectManagementDashboard',
    component: ProjectManagement,
    meta: { layout: 'AppLayout' },
  },
  {
    path: '/dashboard/dashboards/e-commerce',
    name: 'E-CommerceDashboard',
    component: ECommerce,
    meta: { layout: 'AppLayout' },
  },
]
