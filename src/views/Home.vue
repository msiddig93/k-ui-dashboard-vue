<template>
  <main
    class="flex flex-col items-center justify-center h-screen space-y-6 font-sans"
  >
    <h1 class="text-5xl font-medium">In Progress</h1>
    <router-link
      :to="{ name: 'DefaultDashboard' }"
      class="font-medium text-light-text-highlight hover:underline"
    >
      See what has been done
    </router-link>
  </main>
</template>
