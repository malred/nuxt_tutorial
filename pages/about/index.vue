<template>
  <div>
    <h1>about</h1>
    <ul>
      <li v-for="v in ['a', 'b', 'c', 'd', 'e']">
        <!-- 跳转可以使用 <NuxtLink to="xxx" /> -->
        <a :href="`/about/${v}`">{{ v }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
const cookie = useCookie('name')
if (!cookie.value) cookie.value = 'none'
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
</style>
