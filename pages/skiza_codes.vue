<template>
  <main class="">
    <section
      class="antialiased bg-gray-100 text-gray-600 h-screen px-4 dark:bg-slate-900 dark:text-white"
    >
      <div class="flex flex-col justify-center h-full">
        <!-- Table -->
        <div
          class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border dark:border-gray-500 border-gray-200 dark:bg-slate-800"
        >
          <header
            class="px-5 py-4 border-b border-gray-100 dark:border-gray-600 dark:bg-slate-800"
          >
            <div class="font-semibold text-gray-800 dark:text-white">Skiza Codes</div>
          </header>
          <Nuxt-Link to="/" class="px-5 py-2 bg-blue-700 text-white rounded"
            >Go Home</Nuxt-Link
          >
          <div class="overflow-x-auto p-3 dark:bg-slate-800">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50 dark:bg-slate-900"
              >
                <tr>
                  <th></th>
                  <th class="p-2">
                    <div class="font-semibold text-left">Skiza Song</div>
                  </th>
                  <th class="p-2">
                    <div class="font-semibold text-left">Skiza Code</div>
                  </th>
                </tr>
              </thead>

              <tbody class="text-sm divide-y divide-gray-100 dark:divide-gray-500">
                <!-- record 1 -->
                <tr>
                  <td class="p-2">
                    <input type="checkbox" class="w-5 h-5" value="id-1" checked />
                  </td>
                  <td class="p-2">
                    <div class="font-medium dark:text-white text-gray-800">5706833</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">Upendo Tele</div>
                  </td>
                </tr>

                <!-- record 2 -->
                <tr>
                  <td class="p-2">
                    <input type="checkbox" class="w-5 h-5" value="id-2" checked />
                  </td>
                  <td class="p-2">
                    <div>
                      <div class="font-medium dark:text-white text-gray-800">5707128</div>
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">Furaha Tele</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <input type="checkbox" class="w-5 h-5" value="id-1" checked />
                  </td>
                  <td class="p-2">
                    <div class="font-medium dark:text-white text-gray-800">5707130</div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">Ni Haki</div>
                  </td>
                </tr>

                <!-- record 2 -->
                <tr>
                  <td class="p-2">
                    <input type="checkbox" class="w-5 h-5" value="id-2" checked />
                  </td>
                  <td class="p-2">
                    <div>
                      <div class="font-medium dark:text-white text-gray-800">5707133</div>
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">Nicodemu</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">
                    <input type="checkbox" class="w-5 h-5" value="id-2" checked />
                  </td>
                  <td class="p-2">
                    <div>
                      <div class="font-medium dark:text-white text-gray-800">5707137</div>
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left">Yerusalemu</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <toggleMode />
          </div>

          <div
            class="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4 dark:border-gray-600"
          ></div>

          <div class="flex justify-end">
            <input
              type="hidden"
              class="border border-black bg-gray-50"
              x-model="selected"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import toggleMode from "../components/toggleMode.vue";
export default {
  components: { toggleMode },
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
      alert("please wait");
      setTimeout(() => this.$router.push("/signup"), 1000);
    },

    redirectBack() {
      alert("please wait");
      setTimeout(() => this.$router.push("/"), 1000);
    },
  },
  mounted() {
    setTimeout(() => (this.toggle = true));
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700;800;900&display=swap");
* {
  font-family: "Alegreya Sans", sans-serif;
}
</style>
