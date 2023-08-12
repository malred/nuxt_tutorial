<template>
  <div class="item" v-if="isShow(isDone)">
    <span
      @click="handleToggleDone"
      :class="['item-todo', { done: isDone ? true : false }]"
      >{{ name }}</span
    >
    <span class="x" @click="handleClick">x</span>
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
const { isShow } = useOptionMode()
const props = defineProps({
  isDone: {
    type: Boolean
  },
  name: {
    type: String
  }
})

const emits = defineEmits(['del', 'toggleDone'])
const handleClick = () => {
  emits('del', props.name)
}
const handleToggleDone = () => {
  emits('toggleDone', props.name)
}
</script>
