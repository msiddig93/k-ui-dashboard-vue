<template>
  <Modal :show="show" @close="close">
    <div
      class="z-50 flex flex-col w-full min-h-0 transform border rounded-md shadow-lg bg-light-bg border-light-border sm:max-w-sm md:max-w-md dark:bg-dark-elevation-6 dark:border-dark-border dark:shadow-dark-lg"
    >
      <div
        class="flex items-center justify-between flex-shrink-0 p-4 border-b border-light-border dark:border-dark-border"
      >
        <form action="#" role="search" class="flex-1">
          <div class="relative">
            <label
              id="searchLabel"
              for="searchInput"
              class="absolute inset-y-0 flex items-center justify-center"
            >
              <span class="sr-only"> Search </span>
              <SearchIcon aria-hidden="true" class="w-6 h-6 text-gray-400" />
            </label>
            <input
              type="text"
              id="searchInput"
              aria-labelledby="searchLabel"
              name="search"
              x-ref="searchInput"
              class="py-2 pl-10 pr-4 rtl:pl-4 rtl:pr-10 focus:outline-none bg-light-bg dark:bg-dark-elevation-6 dark:text-dark-text-contrast-high"
              placeholder="Search..."
            />
          </div>
        </form>
        <button
          @click="close"
          class="flex-shrink-0 ml-2 icon-btn rtl:ml-0 rtl:mr-2"
        >
          Esc
          <span class="sr-only">Close search modal</span>
        </button>
      </div>

      <!-- Search resualt -->
      <div class="flex-1 p-4 overflow-y-auto max-h-96">
        <h2
          class="text-light-text-contrast-medium dark:text-dark-text-contrast-medium"
        >
          No recent searches
        </h2>
        <div>
          <!--  -->
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { defineProps, useContext, defineEmit } from 'vue'
import Modal from './Modal.vue'
import { SearchIcon } from '@heroicons/vue/outline'

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
