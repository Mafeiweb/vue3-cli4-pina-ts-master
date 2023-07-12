<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" rel="external nofollow" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  color: { type: String, default: "red" },
  name: { type: String, default: "" },
  className: { type: String, default: "" },
});
const iconName = computed(() => {
  return props.name ? `#icon-${props.name}` : "#icon";
});
const svgClass = computed(() => {
  return props.className ? "svg-icon " + props.className : "svg-icon";
});
</script>

<style scoped lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
