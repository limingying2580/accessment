const List = () => import('@/views/List.vue')


const _nav = [
    {
        // icon: 'el-icon-location',
        title: '测评中心',
        path:'List',
        compo: List
        // children: [
        //     {
        //         title: '测评信息',
        //         path: '/testCenter/testInfo',
        //         compo: List
        //     }
        //     ]
    },
]

export default _nav
