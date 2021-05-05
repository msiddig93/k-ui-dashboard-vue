<template>
  <div :class="{ dark: isDark }" :dir="isRTL ? 'rtl' : 'ltr'">
    <div
      class="flex min-h-screen font-sans antialiased bg-light-bg text-contrast-hight dark:bg-dark-bg"
    >
      <MobileBottomBar />

      <Sidebar />

      <!-- Page content -->
      <div
        class="flex flex-col flex-1 pb-20 sm:pb-8 sm:pl-16 sm:rtl:pl-0 sm:rtl:pr-16"
        :class="{ 'xl:pl-80 xl:rtl:pl-0 xl:rtl:pr-80': isSidebarOpen }"
      >
        <Navbar />

        <!--  -->
        <div class="flex-1 px-4 pt-4">
          <slot></slot>
        </div>
      </div>
    </div>

    <SearchModal :show="isSearchModalOpen" @close="isSearchModalOpen = false" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import useState from '../../hooks/useState'
import Sidebar from '../sidebar/Sidebar.vue'
import Navbar from '../navbar/Navbar.vue'
import MobileBottomBar from '../navbar/MobileBottomBar.vue'
import SearchModal from '../modals/SearchModal.vue'

const {
  isSidebarOpen,
  toggleSidebar,
  isDark,
  isRTL,
  isSearchModalOpen,
} = useState()

const checkScreen = () => {
  if (window.innerWidth <= 1280) {
    isSidebarOpen.value = false
  }
  if (window.innerWidth >= 1280) {
    isSidebarOpen.value = true
  }
}

onMounted(() => {
  window.addEventListener('resize', checkScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen)
})
</script>
