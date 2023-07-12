import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/store"; //导入pina
import "@/assets/icons"; //svg目录
import SvgIcon from "@/components/SvgIcon/index.vue"; //自定义svg组件
import Toast from "vue-toastification"; //toast组件
import "vue-toastification/dist/index.css"; //toast组件样式
import "@/style/index.less"; //公共样式
import "swiper/swiper-bundle.css"; //swiper插件样式
// import "amfe-flexible/index.js"; //根据屏幕宽度和缩放比例来动态调整 rem 单位的换算值，从而实现响应式的布局。
import "viewerjs/dist/viewer.css"; //大图查看器样式
import VueViewer from "v-viewer"; //大图查看器
//配置请参考 vue-toastification官方地址 https://vue-toastification.maronato.dev/
const options = {
  transition: "Vue-Toastification__bounce",
  maxToasts: 1,
  newestOnTop: true,
  position: "top-center",
  timeout: 3000,
  closeOnClick: false,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: false,
  draggablePercent: 0.7,
  showCloseButtonOnHover: true,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};

const app = createApp(App);
app.use(VueViewer);
app.component("Icons", SvgIcon);
setupStore(app);
app.use(router).use(Toast, options).mount("#app");
