<template>
  <div class="svg-page">
    <div class="svg-view">
      <div class="attention">
        <span>注意：</span><br />
        1. 会自动扫描 /src/assets/icons/svg下的所有.svg文件 <br />
        2. 动态更改颜色：
        需要把svg图片文件的(需要修改的)fill以及stroke修改成​​currentColor​​或者直接删除，即可更改颜色（参考保存svg）
      </div>
      <div class="svg-box flex">
        <div
          v-for="(icon, i) in svgFiles"
          :key="i"
          class="svg-icon-view"
          :class="code === icon ? 'active' : ''"
          @click="copySvg(icon)"
        >
          <icons class="icon" :name="icon" />
          <span>{{ icon }}</span>
        </div>
      </div>
      <pre class="code">
        <div class="btn" @click="copySourceCode">复制</div>
        <icons class="icon" :name="code" />
        <code id="sourceCode">{{ svgCode }}</code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/store/modules/user";
import useClipboard from "vue-clipboard3"; //引入剪切板复制插件
const { toClipboard } = useClipboard();
const store = useAppStore();
const router = useRouter();
const svgFiles = ref([]) as any;
const code = ref("baocun");
const svgCode = ref('<icons class="icon" name="baocun"></icons>');
const init = () => {
  // 获取当前目录所有为.svg的文件
  const requireContext = require.context("@/assets/icons/svg", false, /\.svg$/);
  svgFiles.value = requireContext
    .keys()
    .map((key) => key.replace("./", "").replace(".svg", ""));
};
init();
const copySvg = (name: string) => {
  code.value = name;
  svgCode.value = `<icons class="icon" name="${name}"></icons>`;
  setTimeout(() => {
    copySourceCode();
  }, 100);
};
const copySourceCode = async () => {
  // 获取源码元素
  var sourceCodeElement: any = document.getElementById("sourceCode");
  try {
    await toClipboard(sourceCodeElement.innerText);
    // 提示复制成功
    store.info("已复制源码到剪贴板");
  } catch (e) {
    console.error(e);
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
.svg-page {
  width: 100vw;
  height: 100vh;
  padding: 30px;
  .svg-view {
    width: 100%;
    max-width: 1920px;
    margin: auto;

    .svg-box {
      width: 100%;
      flex-wrap: wrap;

      .svg-icon-view {
        &.active {
          background-color: #f1eded;
        }

        width: 100px;
        height: 100px;
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span {
          font-weight: bold;
          font-size: 14px;
          height: 20px;
          line-height: 20px;
        }

        // border: 1px solid #dcdcdc;
      }

      .icon {
        width: 50px;
        height: 50px;
      }

      span {
        margin-top: 15px;
        font-size: 12px;
        height: 12px;
        width: 100%;
        overflow: hidden;
      }
    }

    .attention {
      width: 100%;
      text-align: left;
      color: red;

      span {
        font-weight: bold;
      }
    }

    .code {
      border-radius: 8px;
      position: relative;
      background-color: #000000;
      color: #ffffff;
      font-weight: bold;
      font-size: 16px;
      padding: 20px 0;
      .icon {
        width: 50px;
        height: 50px;
        margin-bottom: 20px;
      }
      .btn {
        &:hover {
          opacity: 1;
        }

        cursor: pointer;
        opacity: 0.8;
        position: absolute;
        right: 0;
        top: 0;
        padding: 20px;
      }
    }
  }
}
</style>
