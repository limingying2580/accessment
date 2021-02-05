import { RouteRecordRaw } from 'vue-router'
const _nav: Array<RouteRecordRaw> = [
    // {
    //     // icon: 'el-icon-location',
    //     name: '测评中心',
    //     path:'List',
    //     component: List
    //     // children: [
    //     //     {
    //     //         title: '测评信息',
    //     //         path: '/testCenter/testInfo',
    //     //         compo: List
    //     //     }
    //     //     ]
    // },
    {
        path: 'List',
        component: () => import(/* webpackChunkName: "views.login" */ '@/views/List.vue'),
        name: '测评中心',
        meta: {
            title: '测评信息',
            noCache: true
        }
    }
]

export default _nav
