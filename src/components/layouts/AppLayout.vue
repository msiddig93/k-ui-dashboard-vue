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
    <SettingsPanel
      :show="isSettingsPanelOpen"
      @close="isSettingsPanelOpen = false"
    />
    <NotificationsPanel
      :show="isNotificationsPanelOpen"
      @close="isNotificationsPanelOpen = false"
    />
    <ActivityPanel
      :show="isActivityPanelOpen"
      @close="isActivityPanelOpen = false"
      left
    />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import useState from '../../hooks/useState'
import Sidebar from '../sidebar/Sidebar.vue'
import Navbar from '../navbar/Navbar.vue'
import MobileBottomBar from '../navbar/MobileBottomBar.vue'
import SearchModal from '../modals/SearchModal.vue'
import SettingsPanel from '../panels/SettingsPanel.vue'
import NotificationsPanel from '../panels/NotificationsPanel.vue'
import ActivityPanel from '../panels/ActivityPanel.vue'

const {
  isSidebarOpen,
  toggleSidebar,
  isDark,
  isRTL,
  isSearchModalOpen,
  isSettingsPanelOpen,
  isNotificationsPanelOpen,
  isActivityPanelOpen,
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
