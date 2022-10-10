<template>
  <!-- component -->
  <div class="relative inline-block text-left p-2">
    <div>
      <button
        type="button"
        class="inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-gray-600 dark:bg-slate-800 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-400 focus:ring-offset-gray-100"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        @click="closeMenu"
      >
        menu
        <!-- Heroicon name: mini/chevron-down -->
        <svg
          class="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
    <div
      v-show="close"
      class="absolute right-1 z-10 mt-2 p-2 ml-4 w-56 origin-top-right rounded-md bg-white dark:bg-slate-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div
        class="py-1 pl-2 flex justify-center items-center mx-auto flex-col gap-y-6"
        role="none"
      >
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <p class="text-xl text-center flex justify-end mx-auto items-end pl-20">
          <nuxt-link
            to="/login"
            class="sm:h-16 h-7 px-5 flex justify-center items-center w-full focus:text-orange-500"
          >
            <span
              ><font-awesome-icon
                :icon="['fas', 'right-to-bracket']"
                class="h-10 w-10 text-black hover:rounded-full hover:bg-emerald-300 hover:p-4 dark:hover:bg-slate-600 dark:text-gray-300"
            /></span>
          </nuxt-link>
        </p>
        <p class="text-xl text-center flex justify-end mx-auto items-end pl-20">
          <nuxt-link
            to="/videos"
            class="sm:h-16 h-7 px-5 flex justify-center items-center w-full focus:text-orange-500"
          >
            <span
              ><font-awesome-icon
                :icon="['fas', 'tv']"
                class="h-10 w-10 text-black dark:text-gray-300 hover:rounded-full dark:hover:bg-slate-600 hover:bg-emerald-300 hover:p-4"
            /></span>
          </nuxt-link>
        </p>
        <p class="text-xl text-center flex justify-end mx-auto items-end pl-20">
          <nuxt-link
            to="/Songs"
            class="sm:h-16 h-7 px-5 flex justify-center items-center w-full focus:text-orange-500"
          >
            <span>
              <font-awesome-icon
                :icon="['fas', 'music']"
                class="h-10 w-10 text-black dark:text-gray-300 hover:rounded-full dark:hover:bg-slate-600 hover:bg-emerald-300 hover:p-4"
              />
            </span>
          </nuxt-link>
        </p>

        <p class="text-xl flex justify-end mx-auto items-end pl-20">
          <nuxt-link
            to="/"
            class="sm:h-16 h-7 px-5 flex justify-center items-center w-full focus:text-orange-500"
          >
            <span
              ><font-awesome-icon
                :icon="['fas', 'house']"
                class="h-10 w-10 text-black dark:text-gray-300 hover:rounded-full dark:hover:bg-slate-600 hover:bg-emerald-300 hover:p-4"
            /></span>
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  ssr: false,
  data() {
    return {
      close: false,
    };
  },
  methods: {
    closeMenu() {
      this.close = !this.close;
    },
  },
};
</script>

<style></style>
