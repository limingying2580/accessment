import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import util from '@/api/cookie'
// import Layout from "@/views/Layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: '登录',
    component: () =>  import(/* webpackChunkName: "about" */ '@/views/Login.vue'),
  },

//   {
//     path: '/',
//     component: Layout,
//     redirect: '/home',
//     name: '测评中心',
//     children: [
//       {
//         path: '/list',
//         name: '测评列表',
//         component: () => import(/* webpackChunkName: "about" */ '@/views/List.vue')
//       }
//     ]
//   },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// })

// router.beforeEach((to, from, next) => {
//   let fullPath = to.fullPath
//   if (fullPath == '/login') {
//     util.cookies.deleteCookie('o-token-com')
//     next()
//   } else {
//     const token = util.cookies.getJsonCookie('o-token-com')
//     if (token) {
//       next()
//     } else {
//       next({
//         path: 'login'
//       })
//     }
//   }
// });


/* ----------------- custom ----------------- */
import _nav from "@/router/navigator.ts";
// pre-loading
import Layout from '@/views/Layout.vue'

function _asNavigator(_nav:any) {
  let _map:Map<any,any> = new Map()

  for (let item of _nav) {
    let _path = item.path;
    if (!_path) {
      _path = '/'
    }

    let _route:any = _map.get(_path);
    if (!_route) {
      _route = {
        path: _path,
        name: item.title,
        component: Layout,
        children: [],
      }
      _map.set(_path, _route)
    }
    for (let e of item.children) {
      if (!e.path) {
        continue
      }
      let child:any = {
        path: e.path,
        name: e.title,
        component: e.compo,
      };
      _route.children.push(child)
    }
  }
  let _routes:any = []
  for (let val of _map.values()) {
    _routes.push(val)
  }
  return _routes;
}
// add navigator to routes
router.addRoute(_asNavigator(_nav))
/* ----------------- custom ----------------- */

export default router
