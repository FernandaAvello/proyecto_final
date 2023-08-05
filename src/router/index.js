import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepartmentView from '../views/DepartmentView.vue'
import DepartmentEmployeeView from '../views/DepartmentEmployeeView.vue'
import EmployeeView from '../views/EmployeeView.vue'
import EmployeeDetailView from '../views/EmployeeDetailView.vue'
import ShiftView from '../views/ShiftView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/departamentos',
    name: 'department',
    component: DepartmentView
  },
  {
    path: '/departamentos/:id',
    name: 'departmentEmployee',
    component: DepartmentEmployeeView
  },
  {
    path: '/empleados',
    name: 'employee',
    component: EmployeeView
  },
  {
    path: '/empleados/:id',
    name: 'employeeDetail',
    component: EmployeeDetailView
  },
  {
    path: '/turnos',
    name: 'shift',
    component: ShiftView
  },
  {
    path: '/:catchAll(.*)',
    component: NotFoundView
  }
]

const router = new VueRouter({
  routes
})

export default router
