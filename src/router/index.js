import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Me from '../views/Me.vue'
import Create from '../views/Create.vue'
import Tasks from '../views/Tasks.vue'
import Task from '../views/Task.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/tasks/:id',
    name: 'Task',
    component: Task
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
