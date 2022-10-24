<template>
  <div class="dark:bg-slate-900">
    <section
      id="login"
      class="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto"
    >
      <div class="flex justify-center items-center mx-auto flex-row">
        <nuxt-link
          to="/AdminDashboard"
          class="m-6 dark:bg-slate-700 bg-slate-400 rounded-md ring-1 ring-emerald-500 p-3"
          ><span class="dark:text-white text-gray-900"
            >👉Go to dashboard 🚀</span
          ></nuxt-link
        >
      </div>

      <div class="p-6 bg-sky-100 dark:bg-slate-700 rounded">
        <div class="flex items-center justify-center font-black m-3 mb-12 flex-row">
          <h1 class="tracking-wide text-3xl dark:text-gray-300 text-gray-900">
            Add Song
          </h1>
        </div>
        <form class="flex flex-col justify-center" @submit.prevent="submit">
          <div class="flex justify-between items-center mb-3">
            <div class="inline-flex items-center self-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 mr-3 bg-gradient-to-r from-pink-600 to-red-600 shadow-lg rounded p-1.5 dark:bg-slate-800 text-gray-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 7H7v6h6V7z" />
                <path
                  fill-rule="evenodd"
                  d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="font-bold text-gray-900 dark:text-gray-200"></span>
            </div>
          </div>
          <label class="text-sm font-medium dark:text-white text-gray-600"
            >Song Title</label
          >
          <input
            class="mb-3 px-2 py-1.5 mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="text"
            name="title"
            placeholder="title..."
            v-model="title"
          />
          <label class="text-sm font-medium dark:text-white text-gray-600"
            >Song Content</label
          >
          <textarea
            cols="30"
            rows="10"
            class="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            name="messages"
            placeholder="content..."
            v-model="description"
          ></textarea>
          <button
            class="px-4 py-1.5 rounded-md shadow-lg bg-indigo-600 font-medium text-gray-100 block transition duration-300"
            type="submit"
          >
            <span class="hidden">Processing</span>
            <span class="dark:text-white">Add<span id="subtotal"></span></span>
          </button>
        </form>
        <ToggleMode />
      </div>
    </section>
  </div>
</template>

<script>
import { useStore } from "../composables/songStore";
import { ref } from "vue";
export default {
  components: {},
  setup() {
    const store = useStore();
    let title = ref("");
    let description = ref("");
    async function submit() {
      let results = JSON.stringify({
        title: title.value,
        description: description.value,
      });
      console.log(results);
      await store.create(results);
    }

    return { submit, store, description, title };
  },
};
</script>
