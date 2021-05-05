<template>
  <Panel :show="show" @close="close" title="Activity">
    <div class="flex-1 max-h-full p-4 overflow-hidden hover:overflow-y-auto">
      <span class="text-contrast-medium">Activity Content</span>
      <!-- Activity Panel Content ... -->
    </div>
  </Panel>
</template>

<script setup>
import { defineProps, useContext, defineEmit } from 'vue'
import Panel from './Panel.vue'

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
