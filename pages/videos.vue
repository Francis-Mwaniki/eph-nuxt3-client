<style></style>
<!-- Card List Section -->
<template>
  <div class="relative z-20"><VerticalNav1 /></div>
  <section class="bg-gray-100 dark:bg-slate-900 py-1 px-12">
    <h1
      class="relative z-20 md:text-3xl text-sm font-mono font-extrabold text-orange-600 dark:text-slate-300 flex justify-center items-center mx-auto p-2 pt-3"
    >
      <span
        class="text-black dark:text-white md:p-0 p-2 uppercase font-extrabold bg-gray-200 dark:bg-slate-900 rounded-full"
        >M</span
      >essianic Gospel Artis<span
        class="text-black dark:text-white md:p-0 p-2 uppercase sm:lowercase font-extrabold bg-gray-200 dark:bg-slate-900 rounded-full"
        >t</span
      >
    </h1>

    <Artist2 />
    <div class="custom-shape-divider-top-1665386052 dark:fill-teal-900">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <!-- Card Grid 1 -->
    <Vids1 />
  </section>
</template>

<script>
import { ref } from "vue";
import VerticalNav1 from "../components/verticalNav.vue";
import Artist2 from "../components/Artist2.vue";
import Vids1 from "~~/components/vids.vue";
export default {
  setup() {
    const posts = ref([]);
    const vidId = ref([]);
    const vidId2 = ref([]);
    const config = useRuntimeConfig();
    const fetchUrl = ref(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCusr9FtV7oVAKgMzRD1KjLA&maxResults=10&key=${config.API_KEY}`
    );
    return { posts, vidId2, vidId, fetchUrl };
  },
  methods: {
    async fetchAllYt2() {
      await fetch(this.fetchUrl)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let videos = data.items;
          for (const video of videos) {
            let wholeVideo = video.id;
            let ytVideos = video.snippet;
            this.posts.push(ytVideos);
            this.vidId2.push(wholeVideo);
            console.log(this.vidId2);
          }
        });
    },
  },
  mounted() {
    this.fetchAllYt2();
  },
  components: { VerticalNav1, Artist2, Vids1 },
};
</script>

<style>
.custom-shape-divider-top-1665386052 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1665386052 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1665386052 .shape-fill {
  fill: #070f5a;
}
</style>
