import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { useToast } from "vue-toastification";
import { ref } from "vue";
export const useAppStore = defineStore("user", () => {
  // state 变量
  const token = ref(""); //token 令牌
  const userInfo = ref(null) as any; //用户信息
  //method 函数
  const setToken = (val: string) => {
    token.value = val;
  };
  //设置用户信息
  const setUserInfo = (info: any) => {
    Cookies.set("userInfo", JSON.stringify(info));
    userInfo.value = info;
  };

  //Toast组件 为了方便使用封装到了同一个store中 根据需要可以拆分到modules下，也可以页面单独引用vue-toastification 来使用
  const Toast = useToast(); //toast组件
  const warning = (value: string) => {
    Toast.clear(); // 清除之前的Toast
    Toast.warning(value);
  };
  const error = (value: string) => {
    Toast.clear(); // 清除之前的Toast
    Toast.error(value);
  };
  const info = (value: string) => {
    Toast.clear(); // 清除之前的Toast
    Toast.info(value);
  };
  const success = (value: string) => {
    Toast.clear(); // 清除之前的Toast
    Toast.success(value);
  };
  return {
    token,
    userInfo,
    setUserInfo,
    warning,
    success,
    error,
    info,
    setToken,
  };
});
