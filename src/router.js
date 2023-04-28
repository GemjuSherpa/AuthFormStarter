

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/HomeView.vue'),
        meta: {
            requresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/LoginView.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('./views/RegisterView.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})



router.beforeEach(async (to, from, next) => {
    // Check authentication
    if(to.matched.some(record => record.meta.requresAuth)) {
        const token = localStorage.getItem('token')

        // check the token
        if(token){
            
            return next()
        }

        return next('/login')
    }

    next()
})

export default router