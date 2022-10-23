<template>
  <!-- component -->
  <body class="dark:bg-slate-900 bg-slate-200 font-sans antialiased overflow-hidden mt-0">
    <div class="container mx-auto md:my-36 my-44">
      <nuxt-link
        to="/AdminDashboard"
        class="m-6 dark:bg-slate-700 bg-slate-400 rounded-md ring-1 ring-emerald-500 p-3 absolute top-0"
        ><span class="dark:text-white text-gray-900"
          >👉Go to dashboard 🚀</span
        ></nuxt-link
      >

      <div>
        <div
          class="dark:bg-slate-800 bg-slate-400 relative shadow rounded-lg w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto"
        >
          <div class="flex justify-center">
            <img
              src="../assets/images/catoon.png"
              alt=""
              class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>

          <div class="mt-16">
            <h1 class="font-bold text-center text-3xl dark:text-gray-300 text-gray-700">
              {{ name }}
            </h1>

            <p class="text-center text-sm dark:text-gray-300 text-gray-700 font-medium">
              {{ email }}
            </p>
            <p>
              <span> </span>
            </p>
            <div class="my-5 px-6">
              <a
                href="#"
                class="dark:text-gray-300 text-gray-300 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-indigo-600 hover:bg-teal-800 hover:text-white"
                >Permanent <span class="font-bold">{{ email }}</span></a
              >
            </div>
            <div class="flex justify-between items-center my-5 px-6">
              <a
                href="#!"
                class="dark:text-gray-300 text-gray-700 hover:text-gray-300 hover:bg-indigo-600 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >Love</a
              >
              <a
                href="#!"
                class="dark:text-gray-300 text-gray-700 hover:text-gray-300 hover:bg-indigo-600 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >Joy</a
              >
              <a
                href="#!"
                class="dark:text-gray-300 text-gray-700 hover:text-gray-300 hover:bg-indigo-600 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >Peace</a
              >
              <a
                href="#!"
                class="dark:text-gray-300 text-gray-700 hover:text-gray-300 hover:bg-indigo-600 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >Discipline</a
              >
            </div>

            <div class="w-full">
              <h3 class="font-medium dark:text-gray-300 text-gray-700 text-left px-6">
                {{ id }}
              </h3>
              <div class="mt-5 w-full flex flex-row items-center overflow-hidden text-sm">
                <a
                  class="w-full border-t border-gray-100 dark:text-gray-300 text-gray-700 py-4 pl-6 pr-3 w-full block dark:hover:bg-indigo-600 hover:bg-indigo-400 transition duration-150"
                >
                  <img
                    src="../assets/images/catoon.png"
                    alt=""
                    class="rounded-full h-6 shadow-md inline-block mr-2 dark:text-gray-300 text-gray-700"
                  />
                  Updated his status
                  <span class="dark:text-gray-300 text-gray-700 text-xs">24 min ago</span>
                </a>
                <span><ToggleMode /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import ToggleMode from "../components/toggleMode.vue";
export default {
  data() {
    return {
      msg: "",
      email: "",
      id: "",
      name: "",
    };
  },
  async mounted() {
    try {
      /* let url = "http://localhost:7000/Admin"; */

      const response = await fetch("/api/user/", {
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const content = await response.json();
        this.auth = true;
        this.name = content.message.name;
        this.email = content.message.email;
        this.id = content.message._id;
        console.log(content);
      } else {
        const content = await response.json();
        this.msg = content.message;
        this.auth = false;
        console.log(content);
      }
    } catch (error) {
      console.log(error);
    }
  },
  components: { ToggleMode },
};
</script>

<style></style>
