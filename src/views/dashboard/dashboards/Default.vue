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
          Default
        </h1>
        <a
          href="https://github.com/kamona-wd/k-ui-dashboard-vue"
          target="_blank"
          class="btn btn-md btn-primary"
        >
          View on Github
        </a>
      </div>
    </template>
    <!-- Content -->
    <div class="grid grid-cols-1 gap-6 xl:grid-cols-3">
      <!--  -->
      <div class="grid grid-cols-1 gap-6 xl:col-span-2">
        <!-- Stats Cards -->
        <section class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <h2 class="sr-only">Quick statistics</h2>
          <DefaultStatisticsCard
            v-for="(card, i) in quickStatisticsCards"
            :key="i"
            :card="card"
          />
        </section>
      </div>

      <!--  -->
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1 xl:col-span-1"
      >
        <!--  -->
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../../../components/layouts/AppLayout.vue'
import Breadcrumb from '../../../components/global/Breadcrumb.vue'
import DefaultStatisticsCard from '../../../components/cards/DefaultStatisticsCard.vue'
import { quickStatisticsCards } from '../../../data/defaultPage'

const breadcrumbItems = [
  {
    title: 'K-UI',
    current: false,
    link: { name: 'Home' },
  },
  {
    title: 'Dashboards',
    current: false,
    link: { name: 'DefaultDashboard' },
  },
  {
    title: 'Default',
    current: true,
    link: { name: 'DefaultDashboard' },
  },
]
</script>
