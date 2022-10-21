<template>
  <main class="bg-slate-800">
    <div class="bg-gradient-to-r from-cyan-500 via-transparent to-cyan-500">
      <img src="../assets/images/bg.jpg" alt="" class="w-full min-h-screen" />
    </div>
    <div
      v-show="toggle"
      class="mt-20 flex justify-center items-center mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 max-w-3xl md:inset-0 h-modal"
    >
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative rounded-lg shadow bg-slate-700">
          <!-- Modal header -->
          <div
            class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-300 dark:text-white">
              Terms of Service
            </h3>
            <button
              type="button"
              @click="toggleMode"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6 flex justify-center items-center flex-col mx-auto">
            <div class="text-base leading-relaxed dark:text-gray-400 text-gray-400">
              <span
                >👉 John 3:16 for Elohim so loved the world that He gave His only son that
                whosoever believes in Him will not perish but have Eternal life
              </span>
              <span
                >👉 See more verses here Rev 3:1,1:3,1 John 5:3 and Ecc 12:12-13.
              </span>
              <div class="flex justify-center items-center mx-auto flex-col gap-y-2">
                <span
                  >👉For you to see this dashboard you have to be authenticated!!
                </span>
                <span class="flex justify-center items-center flex-row">
                  <span>🚀</span
                  ><span
                    class="cursor-pointer bg-indigo-600 text-white px-7 py-2 rounded-lg ring-2 ring-red-500"
                  >
                    <nuxt-link to="/AdminLogin">Login</nuxt-link>
                  </span>
                  <span>🚀</span
                  ><span
                    class="cursor-pointer bg-indigo-600 text-white px-7 py-2 rounded-lg ring-2 ring-red-500"
                  >
                    <nuxt-link to="/">(:Home</nuxt-link>
                  </span>
                </span>
              </div>
            </div>
            <p
              class="text-base leading-relaxed dark:text-gray-400 border-b border-blue-600 text-red-400"
            >
              {{ msg }}
            </p>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
          >
            <button
              @click="redirectMode"
              type="button"
              class="text-white bg-teal-500 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              @click="redirectBack"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleMode() {
      this.toggle = !this.toggle;
    },
    redirectMode() {
      setTimeout(() => this.$router.push("/AdminLogin"), 1000);
    },
    redirectBack() {
      setTimeout(() => this.$router.push("/"), 1000);
    },
  },
  mounted() {
    setTimeout(() => (this.toggle = true));
  },
};
</script>

<style></style>
