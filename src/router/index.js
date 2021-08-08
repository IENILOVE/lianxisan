import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import ('../views/home/Home.vue')
const Category = () => import ('../views/category/Category.vue')
const Cart = () => import ('../views/cart/Cart.vue')
const Profile = () => import ('../views/profile/Profile.vue')

Vue.use(VueRouter)


const routes = [
    {
        path : '',
        redirect : '/home'
    },
    {
        path : '/home',
        component : Home
    },
    {
        path : '/category',
        component : Category
    },
    {
        path : '/cart',
        component : Cart
    },
    {
        path : '/profile',
        component : Profile
    },

]
const router = new VueRouter({
    routes,
    mode : 'history'
})

//解决 vue 中多次切换相同一个路由出现的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    return originalPush.call(this, location).catch(err => err)
};

export default router