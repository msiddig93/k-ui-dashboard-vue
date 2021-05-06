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

        <!-- Map card -->
        <Card title="Visitors by Location" :moreItems="cardMoreActions">
          <!-- Map -->
          <div id="worldMap" class="w-full h-64 overflow-hidden md:h-72"></div>

          <!-- Circles -->
          <!-- x-data="{ circumference: 50 * 2 * Math.PI}" -->
          <div class="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4">
            <ProgressCircle
              v-for="(location, i) in visitorsLocations"
              :key="i"
              :item="location"
            />
          </div>
        </Card>
      </div>

      <!--  -->
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-1 xl:col-span-1"
      >
        <!-- Browsers card -->
        <Card title="Visitors by Browser" :moreItems="cardMoreActions">
          <!-- Chart -->
          <div class="relative flex items-center justify-center mt-2 h-72">
            <canvas id="browsersChart"></canvas>
          </div>

          <!-- Legends -->
          <ul class="grid grid-cols-2 gap-3 p-6">
            <li
              class="flex items-center"
              v-for="(browser, i) in visitorsBrowsers"
              :key="i"
            >
              <span
                class="inline-block px-4 py-1 mr-3 rtl:mr-0 rtl:ml-3"
                :style="`background-color: ${browser.color}`"
              ></span>
              <span class="text-base font-medium" x-text="browser.browser">
                {{ browser.browser }}
              </span>
            </li>
          </ul>
        </Card>

        <!-- Social traffic card -->
        <Card title="Social Media Traffic" :moreItems="cardMoreActions">
          <ul class="space-y-6">
            <li
              class="flex items-center justify-between"
              v-for="({ title, count }, i) in socialMediaTraffic"
              :key="i"
            >
              <span class="text-lg font-medium">{{ title }}</span>
              <span class="text-base font-medium">{{ count }}</span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '../../../components/layouts/AppLayout.vue'
import Breadcrumb from '../../../components/global/Breadcrumb.vue'
import DefaultStatisticsCard from '../../../components/cards/DefaultStatisticsCard.vue'
import Card from '../../../components/cards/Card.vue'
import ProgressCircle from '../../../components/global/ProgressCircle.vue'
import {
  quickStatisticsCards,
  mountMap,
  mountBrowsersChart,
  visitorsLocations,
  visitorsBrowsers,
  socialMediaTraffic,
} from '../../../data/defaultPage'
import { onMounted } from 'vue'

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

onMounted(() => {
  mountMap()
})
onMounted(() => {
  mountBrowsersChart()
})

const cardMoreActions = [
  {
    title: 'View All',
    action: { name: 'DefaultDashboard' },
  },
]
</script>
