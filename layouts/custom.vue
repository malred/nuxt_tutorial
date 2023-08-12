<template>
  <div>
    <!-- 页面内容 -->
    <slot />
    <div class="foot">
      <div>个人博客网站：<a href="//malred.github.io">malred.github.io</a></div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.foot {
  font-size: 18px;
  line-height: 50px;
  height: 50px;
  text-align: center;
  background-color: aquamarine;
  position: absolute;
  width: 100%;
  bottom: 0;
}
</style>
