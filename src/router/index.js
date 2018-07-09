import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/pages/Film'
import User from '@/pages/User';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: { name: 'film' }
        },
        {
            path: '/film',
            name: 'film',
            component: Film
        },
        {
            path: '/user',
            name: 'user',
            component: User
        }
    ]
})
