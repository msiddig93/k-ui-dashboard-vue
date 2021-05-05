<template>
  <TransitionRoot appear :show="show">
    <Dialog
      static
      :open="show"
      @close="close"
      class="fixed inset-0 z-50 flex items-start justify-center p-4 lg:items-center"
      :class="{ dark: isDark }"
      :dir="isRTL ? 'rtl' : 'ltr'"
    >
      <TransitionChild
        enter="transition ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay
          class="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-75"
        />
      </TransitionChild>
      <TransitionChild
        enter="transition-transform ease-in-out"
        enter-from="-translate-y-full opacity-0"
        enter-to="translate-y-0 opacity-100"
        leave="transition-transform ease-in-out"
        leave-from="translate-y-0 opacity-100"
        leave-to="-translate-y-full opacity-0"
      >
        <slot></slot>
      </TransitionChild>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { defineProps, ref, useContext, defineEmit } from 'vue'
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import useState from '../../hooks/useState'

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

const { isDark, isRTL } = useState()

const { emit } = useContext()

defineEmit(['close'])

const close = () => {
  emit('close')
}

const isOpen = ref(props.show)
const setIsOpen = (value) => {
  isOpen.value = value
}
</script>
