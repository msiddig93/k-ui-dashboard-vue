<template>
  <AppLayout>
    <template #breadcrumb>
      <Breadcrumb :items="breadcrumbItems" />
    </template>
    <template #pageTitle>
      <div
        class="flex flex-col pb-4 space-y-4 border-b border-light-border dark:border-dark-border sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
      >
        <h1
          id="page-title"
          class="text-2xl font-semibold text-light-text-contrast-high dark:text-dark-text-contrast-high"
        >
          Blank
        </h1>
        <a
          href="https://github.com/kamona-wd/k-ui-dashboard-alpine"
          target="_blank"
          class="btn btn-md btn-primary"
        >
          View on Github
        </a>
      </div>
    </template>
    <!-- Content -->
    <div>
      <h1 class="title-1 text-contrast-high">
        Start build your awesome project!
      </h1>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../../../components/layouts/AppLayout.vue'
import Breadcrumb from '../../../components/global/Breadcrumb.vue'

const breadcrumbItems = [
  {
    title: 'K-UI',
    current: false,
    link: { name: 'Home' },
  },
  {
    title: 'Pages',
    current: false,
    link: { name: 'Blank' },
  },
  {
    title: 'Blank',
    current: true,
    link: { name: 'Blank' },
  },
]
</script>
