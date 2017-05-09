import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'list',
        component: list
    }, {
        path: '/detail',
        name: 'detail',
        component: detail
    }]
})