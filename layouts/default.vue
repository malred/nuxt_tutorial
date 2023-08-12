<template>
  <div>
    <!-- 顶部导航 -->
    <nav>
      <span><a href="/">Home</a></span>
      <span><a href="/about">About</a></span>
    </nav>
    <!-- 页面内容 -->
    <slot />
  </div>
</template>
<style scoped>
nav {
  background-color: aquamarine;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: end;
}
span {
  cursor: pointer;
  margin: 8px;
}
a {
  text-decoration: none;
}
</style>
