<template>
  <div class="">
    <h1 @click="console.log(config)">{{ mock[0].desc }}</h1>
  </div>
</template>
<script setup>
const route = useRoute()
const name = route.params.name
// const { data: mock, error } = useFetch(
//   // url变化会动态请求
//   () => `http://localhost:5000/mock?name=${name}`
// )

// 读取环境变量
const config = useRuntimeConfig()
console.log(config.public.baseUrl)

const { data: mock, error } = useAsyncData('mock', async () => {
  const response = await $fetch(`${config.public.baseUrl}/mock?name=${name}`)

  // 可以对得到的数据进行一些操作
  response[0].desc += `~`

  return response
})

const cookie = useCookie('name')
cookie.value = name
</script>
<style scoped>
div {
  margin-top: 50px;
  text-align: center;
}
</style>
