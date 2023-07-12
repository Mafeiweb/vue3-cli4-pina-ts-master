<template>
  <div class="home">详情页动态传参：{{ value }}</div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const value = computed(() => route.params.id);
const router = useRouter();
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
.home {
  width: 100vw;
  height: 100vh;
}
</style>
