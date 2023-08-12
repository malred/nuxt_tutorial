<template>
  <span
    @click="changeOptionMode(option)"
    :class="['option', { active: optionMode == option ? true : false }]"
  >
    {{ option }}</span
  >
  <span class="line" v-if="line">|</span>
</template>
<script setup>
import { defineProps } from 'vue'
const { optionMode, changeOptionMode } = useOptionMode()
const props = defineProps({
  option: {
    type: String
  },
  line: {
    type: Boolean,
    default: true
  }
})
</script>
