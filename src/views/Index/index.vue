<template>
  <div class="home text-white">
    <div>v-viewer插件使用示例</div>
    <div class="img-box" v-viewer="viewerOption">
      <img src="@/assets/image/1.jpeg" alt="" />
      <img src="@/assets/image/2.jpeg" alt="" />
      <img src="@/assets/image/3.jpeg" alt="" />
      <img src="@/assets/image/4.jpeg" alt="" />
      <img src="@/assets/image/5.jpeg" alt="" />
      <img src="@/assets/image/6.jpeg" alt="" />
      <img src="@/assets/image/7.jpeg" alt="" />
      <img src="@/assets/image/8.jpeg" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const viewerOption = ref({
  navbar: true, //缩略图
  title: true, // 图片名称
  button: true, //关闭按钮
  inline: false, //是否限制在行内展示
  // 设置按钮显示
  // toolbar: {
  //   zoomIn: 4,
  //   zoomOut: 4,
  //   reset: 4,
  //   rotateLeft: 4,
  //   rotateRight: 4,
  //   flipHorizontal: 4,
  //   flipVertical: 4,
  // },
});
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
  .img-box {
    max-width: 1920px;
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      width: 24%;
      height: 300px;
      object-fit: contain;
      background-color: #f5f5f5;
      margin-bottom: 20px;
    }
  }
}
</style>
