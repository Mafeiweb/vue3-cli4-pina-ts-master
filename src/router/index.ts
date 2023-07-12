import { createRouter, createWebHistory } from "vue-router";
import routerA from "./router";
import { useAppStore } from "@/store/modules/user";
const routes = [...routerA]; //可导入多个 [...routerA,...routerB]
import Cookies from "js-cookie";
const router = createRouter({
  history: createWebHistory(),
  routes,
});
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪一个路径跳转而来
  // next 是一个函数，表示放行
  // next() 放行 next('/login') 跳转
  if (to.path === "/login") return next();
  //解决页面刷新store会重置问题
  // const userInfo = Cookies.get("userInfo");
  //
  // if (userInfo) {
  //   try {
  //     // 放行
  //     const user = JSON.parse(userInfo);
  //     useAppStore().setUserInfo(user);
  //     return next();
  //   } catch (error) {
  //     return next("/login");
  //   }
  // } else {
  //   return next("/login");
  // }
  return next();
});
export default router;
