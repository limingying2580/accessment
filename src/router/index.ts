import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import util from '@/api/cookie'
import Layout from "@/views/Layout.vue";
import _nav from "@/router/navigator";

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

router.beforeEach((to, from, next) => {
  let fullPath = to.fullPath
  if (fullPath == '/login') {
    util.cookies.deleteCookie('o-token-com')
    next()
  } else {
    const token = util.cookies.getJsonCookie('o-token-com')
    if (token) {
      next()
    } else {
      next({
        path: 'login'
      })
    }
  }
});

/* ----------------- custom ----------------- */
export function _asNavigator(_nav:any[]) {
  let _map:Map<any,any> = new Map()
  for (let item of _nav) {
    let _path:any = item.path;
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
      let child = {
        path: e.path,
        name: e.name,
        component: e.compoment,
        // children: [],
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
router.addRoute(_asNavigator([_nav]))
/* ----------------- custom ----------------- */

export default router
