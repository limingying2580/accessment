// lazy-loaded when the route is visited.
const List =() =>import('@/views/List.vue')

// two-level navigation
const _nav = [
    {
        // icon: 'el-icon-edit-outline',
        title: '测评中心',
        children: [
            {
                title: '测评列表',
                path: 'List',
                compo: List,
                hide:true,
            },
        ],
    },
]


export default _nav
