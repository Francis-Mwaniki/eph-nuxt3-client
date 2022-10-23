<style></style>
<!-- Card List Section -->
<template>
  <div class="relative z-20"><VerticalNav1 /></div>
  <section class="bg-gray-100 dark:bg-slate-900 py-1 px-12">
    <h1
      class="relative z-20 md:text-3xl text-sm font-mono font-extrabold text-orange-600 dark:text-slate-300 flex justify-center items-center mx-auto p-2 pt-3"
    >
      Gospel Artist
    </h1>

    <Artist2 />
    <ToggleMode />

    <!-- Card Grid 1 -->
    <Vids1 />
  </section>
</template>

<script>
import VerticalNav1 from "../components/verticalNav.vue";
import Artist2 from "../components/Artist2.vue";
import Vids1 from "~~/components/vids.vue";
import ToggleMode from "../components/toggleMode.vue";

export default {
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
  mounted() {},
  components: { VerticalNav1, Artist2, Vids1, ToggleMode },
};
</script>

<style></style>
