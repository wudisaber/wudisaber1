import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import HomeListDetail from '../views/detail/HomeListDetail'
import Carts from '../views/cart/Carts.vue'
import Category from '../views/category/Category.vue'
import Mine from '../views/mine/Mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/homeListDetail/:id',
    name: 'HomeListDetail',
    component: HomeListDetail
  },
  {
    path: '/cart',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }
]

const router = new VueRouter({
  routes
})

export default router
