<template>
  <header
    class="sticky top-0 z-[5] flex items-center flex-shrink-0 h-full px-2 bg-light-bg border-b border-light-border sm:px-4 max-h-14 dark:bg-dark-elevation-2 dark:border-dark-border"
  >
    <Logo class="hidden sm:block" />

    <!-- Mobile nav links -->
    <Menu as="div" class="relative sm:hidden">
      <MenuButton class="icon-btn">
        <span class="sr-only">Open scecondary menu</span>
        <MenuAlt1Icon aria-hidden="true" class="w-6 h-6" />
      </MenuButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="fixed z-10 flex flex-col p-4 space-y-4 origin-top-left border rounded-md shadow-lg rtl:origin-top-right bg-light-bg border-light-border top-2 left-2 right-2 dark:bg-dark-elevation-5 dark:border-dark-border dark:shadow-dark-lg"
        >
          <MenuItem>
            <Menu as="div" v-slot="{ open }">
              <MenuButton
                class="flex items-center text-body-small text-contrast-high"
              >
                <span class="mr-1 rtl:mr-0 rtl:ml-1">Author</span>
                <ChevronUpIcon
                  aria-hidden="true"
                  class="w-4 h-4 transition-transform transform"
                  :class="!open ? 'rotate-180' : ''"
                />
              </MenuButton>
              <MenuItems class="mt-2 ml-4 space-y-2 rtl:ml-0 rtl:mr-4">
                <MenuItem>
                  <a
                    href="https://twitter.com/ak_kamona"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>Twitter</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="https://github.com/Kamona-WD"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>Github</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </MenuItem>
          <MenuItem>
            <Menu as="div" v-slot="{ open }">
              <MenuButton
                class="flex items-center text-body-small text-contrast-high"
              >
                <span class="mr-1 rtl:mr-0 rtl:ml-1">Projects</span>
                <ChevronUpIcon
                  aria-hidden="true"
                  class="w-4 h-4 transition-transform transform"
                  :class="!open ? 'rotate-180' : ''"
                />
              </MenuButton>
              <MenuItems class="mt-2 ml-4 space-y-2 rtl:ml-0 rtl:mr-4">
                <MenuItem>
                  <a
                    href="https://github.com/Kamona-WD/kwd-dashboard"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>K-WD Dashboard</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="https://github.com/Kamona-WD/starter-dashboard-layout"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>Starter Dashboard Layout</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="https://github.com/Kamona-WD/starter-dashboard-layout-vue"
                    target="_blank"
                    class="flex items-center text-sm"
                  >
                    <span>Starter Dashboard Layout (Vue)</span>
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-3 rtl:ml-0 rtl:mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>

    <!-- Right buttons -->
    <div class="flex items-center ml-auto rtl:ml-0 rtl:mr-auto">
      <!-- Search button -->
      <button class="hidden mr-4 sm:block icon-btn rtl:mr-0 rtl:ml-4">
        <span class="sr-only">Open search modal</span>
        <SearchIcon aria-hidden="true" class="w-6 h-6" />
      </button>

      <!-- User dropdown menu -->
      <Menu
        as="div"
        class="relative flex items-center flex-shrink-0 p-2 sm:p-0"
      >
        <MenuButton
          class="flex items-center rounded-lg focus:outline-none focus:ring focus:ring-primary focus:ring-offset-white focus:ring-offset-2 dark:focus:ring-offset-dark-elevation-2"
        >
          <span class="sr-only">User menu</span>
          <img
            class="w-10 h-10 rounded-lg"
            src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
            alt="Ahmed Kamel"
          />
        </MenuButton>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute top-0 right-0 w-48 py-1 origin-top-right rounded-md shadow-lg bg-light-bg mt-14 focus:outline-none dark:bg-dark-elevation-5 dark:shadow-dark-lg"
          >
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-contrast-high"
                :class="active ? 'bg-gray-100 dark:bg-dark-elevation-1' : ''"
              >
                Your Profile
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-contrast-high"
                :class="active ? 'bg-gray-100 dark:bg-dark-elevation-1' : ''"
              >
                Settings
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-contrast-high"
                :class="active ? 'bg-gray-100 dark:bg-dark-elevation-1' : ''"
              >
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </header>
</template>

<script setup>
import Logo from '../global/Logo.vue'
import { SearchIcon, MenuAlt1Icon, ChevronUpIcon } from '@heroicons/vue/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>
