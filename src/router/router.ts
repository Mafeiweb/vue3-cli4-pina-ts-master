import { RouteRecordRaw } from "vue-router";
// /* webpackChunkName: "Index" */ 这个用于打包构建拆解不同的模块，用于性能优化 "Index" 为模块名称 可在dist查看
const routeList: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    meta: {
      title: "首页",
    },
    component: () =>
      import(/* webpackChunkName: "Index" */ "@/views/Index/index.vue"),
  },
  {
    path: "/login", //常用于详情页面动态查询用/xxxxxx 代替?=xxxxxx
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () =>
      import(/* webpackChunkName: "Detail" */ "@/views/Login/login.vue"),
  },
  {
    path: "/detail/:id", //常用于详情页面动态查询用/xxxxxx 代替?=xxxxxx
    name: "Detail",
    meta: {
      title: "动态id页面",
    },
    component: () =>
      import(/* webpackChunkName: "Detail" */ "@/views/Detail/detail.vue"),
  },
];
const svgPreview: Array<RouteRecordRaw> = [
  {
    path: "/svg",
    name: "SvgPreview",
    meta: {
      title: "其他",
    },
    component: () =>
      import(
        /* webpackChunkName: "SvgPreview" */ "@/views/SvgPreview/SvgPreview.vue"
      ),
  },
];
let routes: Array<RouteRecordRaw> = [];
//根据环境变量动态设置svg预览页面防止在生成环境出现不该出现的页面
if (process.env.NODE_ENV === "development") {
  routes = [...routeList, ...svgPreview];
} else {
  routes = routeList;
}
export default routes;
