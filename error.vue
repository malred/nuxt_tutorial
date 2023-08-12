<template>
  <div>
    <div class="container">
      <h1 v-if="error.statusCode === 404">Page not found!</h1>
      <h1 v-else>Something be wrong!</h1>
      <NuxtLink to="/">Go Back</NuxtLink>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  error: {
    type: Object
  }
})
</script>
<style scoped>
.container {
  text-align: center;
  margin-top: 5rem;
}
</style>
