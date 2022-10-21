<template>
  <main class="bg-slate-800">
    <main
      class="flex justify-center items-center mx-auto flex-wrap gap-2 bg-gray-100 dark:bg-slate-900 text-slate-900"
    >
      <div class="" v-for="vid in videos">
        <iframe
          class="w-full min-w-full md:w-1/2 md:max-h-screen bg-gray-100 dark:bg-slate-700 object-cover mx-auto"
          style="height: 300px; width: 400px"
          :src="`https://www.youtube.com/embed/${vid.videoId}`"
          title="LATEST SABBATH SONG UPENDO TELE_BY EPHESUS"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </main>
  </main>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        { videoId: "Cgj3yAsrlBo" },
        { videoId: "Zr9lUG-3_cc" },
        { videoId: "J05X_RK_D6g" },
        { videoId: "oE-iMg1SpPI" },
        { videoId: "lfGOgUWzQ5U" },
      ],
    };
  },
};
</script>

<style></style>
