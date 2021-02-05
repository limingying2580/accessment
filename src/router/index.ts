import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/views/Layout.vue";
// import _nav from "@/router/navigator";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: '登录',
    component: () =>  import(/* webpackChunkName: "about" */ '@/views/Login.vue'),
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/* ----------------- custom ----------------- */
// function _asNavigator(_nav:any[]) {
//   let _map:Map<any,any> = new Map()
//   for (let item of _nav) {
//     let _path:any = item.path;
//     if (!_path) {
//       _path = '/'
//     }
//     let _route:any = _map.get(_path);
//     if (!_route) {
//       _route = {
//         path: _path,
//         name: item.title,
//         component: Layout,
//         children: [],
//       }
//       _map.set(_path, _route)
//     }
//
//     for (let e of item.children) {
//       if (!e.path) {
//         continue
//       }
//       let child = {
//         path: e.path,
//         name: e.title,
//         component: e.compo,
//         // children: [],
//       };
//
//       _route.children.push(child)
//     }
//     // for (let m of item.children.children) {
//     //   if (!m.path) {
//     //     continue
//     //   }
//     //   let secondchild: any ={
//     //     path: m.path,
//     //     name: m.title,
//     //     component: m.compo,
//     //   };
//     //   _route.children.children.push(secondchild)
//     // }
//   }
//
//   let _routes:any = []
//   for (let val of _map.values()) {
//     _routes.push(val)
//   }
//   return _routes;
// }
// router.addRoute(_asNavigator([_nav]))
/* ----------------- custom ----------------- */

export default router
