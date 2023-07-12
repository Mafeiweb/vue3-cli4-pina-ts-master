<template>
  <div class="login-page flex justify-center items-center">
    <div class="btn btn1" @click="taostFun('info')">taost-info</div>
    <div class="btn btn2" @click="taostFun('warn')">taost-warn</div>
    <div class="btn btn3" @click="taostFun('error')">taost-error</div>
    <div class="btn" @click="loginFun">登录</div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { UserLogin } from "@/server"; //导入登录函数
import { useAppStore } from "@/store/modules/user";
const store = useAppStore();
const router = useRouter();
const userId = computed(() => store.userInfo && store.userInfo.Id); //动态获取用户ID,不用computed会无法及时获取最新数据
/**
 * @description: 登录接口调用示例
 * @return {*}
 * @author: cool panda
 */
const loginFun = async () => {
  console.log(UserLogin);
  // const params = {
  //   name: "", //用户名
  //   pass: "", //登录密码
  // };
  // const res: any = await UserLogin(params);
  // if (res.code === 1) {
  //   console.log("登录成功");
  // } else {
  //   store.error(res.Message); // 错误提示
  // }
  store.setToken("xxxxx");
  toPage("/");
};
const taostFun = (type: string) => {
  const msg = "测试文字文字文字文字";
  if (type === "info") {
    store.info(msg); // 错误提示
  } else if (type === "warn") {
    store.warning(msg); // 错误提示
  } else if (type === "error") {
    store.error(msg); // 错误提示
  }
};
/**
 * @description: 页面跳转实例
 * @param {*} url
 * @return {*}
 * @author: cool panda
 */
const toPage = (url: string) => {
  router.push(url);
};
onMounted(() => {
  console.log("dom构建完成");
});
</script>
<style lang="less" scoped>
@import "./login.less";
</style>
