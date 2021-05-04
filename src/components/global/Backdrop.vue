<template>
  <transition
    enter-active-class="transition-opacity"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="show"
      @click="close"
      aria-hidden="true"
      class="fixed inset-0 z-10 bg-black bg-opacity-50 dark:bg-opacity-75"
    ></div>
  </transition>
</template>

<script setup>
import { defineProps, useContext, defineEmit } from 'vue'
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})
const { emit } = useContext()
defineEmit(['close'])
const close = () => {
  emit('close')
}
</script>
