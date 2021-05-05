import { ref } from 'vue'

const getTheme = () => {
  if (window.localStorage.getItem('dark')) {
    return JSON.parse(window.localStorage.getItem('dark'))
  }
  return (
    !!window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

const setTheme = (value) => {
  window.localStorage.setItem('dark', value)
}

const isDark = ref(getTheme())

const toggleTheme = () => {
  isDark.value = !isDark.value
  setTheme(isDark.value)
}

const isRTL = ref(false)

const isSidebarOpen = ref(window.innerWidth <= 1280 ? false : true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const isSearchModalOpen = ref(false)
const isSettingsPanelOpen = ref(false)
const isNotificationsPanelOpen = ref(false)
const isActivityPanelOpen = ref(false)

export default function useState() {
  return {
    isDark,
    toggleTheme,
    isRTL,
    isSidebarOpen,
    toggleSidebar,
    isSearchModalOpen,
    isSettingsPanelOpen,
    isNotificationsPanelOpen,
    isActivityPanelOpen,
  }
}
