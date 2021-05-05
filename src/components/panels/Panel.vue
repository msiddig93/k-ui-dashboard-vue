<template>
  <!-- Backdrop -->
  <Backdrop :show="show" @close="close" />

  <!-- Panel -->
  <transition
    enter-active-class="transition duration-300 ease-in-out transform"
    :enter-from-class="
      left
        ? '-translate-x-full rtl:translate-x-full'
        : 'translate-x-full rtl:-translate-x-full'
    "
    :enter-to-class="left ? '-translate-x-0' : 'translate-x-0'"
    leave-active-class="transition duration-300 ease-in-out transform"
    :leave-from-class="left ? '-translate-x-0' : 'translate-x-0'"
    :leave-to-class="
      left
        ? '-translate-x-full rtl:translate-x-full'
        : 'translate-x-full rtl:-translate-x-full'
    "
  >
    <section
      v-if="show"
      :aria-labelledby="title"
      class="fixed inset-y-0 z-20 w-full max-w-xs bg-light-bg dark:bg-dark-elevation-2 sm:max-w-md"
      :class="{
        'right-0 rtl:left-0 rtl:right-auto': !left,
        'left-0 rtl:right-0 rtl:left-auto': left,
      }"
    >
      <div class="flex items-center justify-between flex-shrink-0 p-2">
        <h6 class="p-2 text-lg text-contrast-high">{{ title }}</h6>
        <!-- Close button -->
        <button @click="close" class="icon-btn">
          <XIcon class="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <!-- Panel content -->
      <slot></slot>
    </section>
  </transition>
</template>

<script setup>
import { defineProps, useContext, defineEmit } from 'vue'
import { XIcon } from '@heroicons/vue/outline'
import Backdrop from '../global/Backdrop.vue'

defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  left: {
    type: Boolean,
    required: false,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
})

const { emit } = useContext()

defineEmit(['close'])

const close = () => {
  emit('close')
}
</script>
