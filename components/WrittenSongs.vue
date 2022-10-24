<template>
  <VerticalNav1 />
  <main style="min-height: 1000px">
    <div class="bg-gray-100 dark:bg-slate-800">
      <div class="container mx-auto">
        <div role="article" class="bg-gray-100 dark:bg-slate-700 py-12 md:px-8">
          <div class="px-4 xl:px-0 py-10">
            <div class="flex flex-col lg:flex-row flex-wrap">
              <div class="mt-1 lg:mt-0 lg:w-3/5">
                <div>
                  <h1
                    class="text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 dark:text-gray-400 tracking-normal lg:w-11/12"
                  >
                    All Written Songs
                  </h1>
                </div>
              </div>

              <div class="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
                <!--   <div class="pt-2 relative text-gray-600">
                  <input
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white dark:text-white dark:bg-slate-600 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    v-model="input"
                    placeholder="Search song by title"
                  />

                  <button
                    type="submit"
                    class="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full focus:bg-gray-100 focus:ring-indigo-700 bg-white dark:bg-slate-600 focus:outline-none absolute right-0 top-0 mt-5 mr-4"
                  >
                    <font-awesome-icon
                      icon="fa-solid fa-album-circle-user"
                      class="text-black h-5 w-5"
                    />
                  </button>
                </div> -->
              </div>
            </div>
          </div>
          <div class="px-6 xl:px-0">
            <div
              class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8"
            >
              <div
                role="cell"
                class="bg-gray-100 dark:bg-slate-600"
                v-for="song in data[0]"
                :key="song.id"
              >
                <div
                  class="bg-white dark:bg-slate-600 p-5 rounded-md relative h-full w-full"
                >
                  <!-- class="absolute inset-0 object-center object-cover h-full w-full"  -->
                  <span
                    ><img
                      class="bg-gray-200 h-10 w-10 dark:bg-slate-600 p-2 mb-5 rounded-full"
                      src="../assets/images/catoon.png"
                      alt="home-1"
                  /></span>
                  <h1 class="pb-4 text-2xl font-semibold dark:text-gray-300">
                    {{ song.title }}
                  </h1>
                  <div class="my-5">
                    <div
                      class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.5"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <h4 class="text-md text-gray-900 dark:text-gray-100">
                        {{ song._id }}
                      </h4>
                    </div>
                    <div
                      class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <h4 class="text-md text-gray-900 dark:text-gray-200">
                        {{ song.description }}
                      </h4>
                    </div>
                  </div>
                  <a
                    class="hover:text-indigo-50 no-underline rounded-md bg-slate-400 absolute bottom-5 text-sm text-indigo-700 dark:text-indigo-200 font-bold cursor-pointer flex items-center"
                  >
                    <p class="text-blue-700 font-light p-1 mt-3 sm:mt-1">
                      created @ {{ song.createdAt }} by Admin
                    </p>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-arrow-narrow-right"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#4338CA"
                        fill="indigo-600 dark:white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { computed, ref } from "vue";
import VerticalNav1 from "~~/components/verticalNav.vue";

export default {
  components: { VerticalNav1 },
  setup() {
    let input = ref("");
    let data = ref([]);

    /*  const searchedSongs = computed(() => {
      return songs.value.filter((song) => {
        return song.title.toLowerCase().indexOf(input.value.toLowerCase()) != -1;
      });
    }); */

    return { data, input };
  },
  methods: {
    async getAllSongs() {
      let songUrl = "/api/s1/Songs";
      const res = await fetch(songUrl, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      if (res.ok) {
        const resp = await res.json();
        this.data = [...this.data, resp];
      } else {
        const resp = await res.json();
        console.log(resp);
      }
    },
  },
  sortTime() {
    return this.data.forEach((tm) => {});
  },
  computed: {},

  mounted() {
    this.getAllSongs();
  },
};
</script>
