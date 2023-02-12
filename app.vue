<template>
  <div class="dark:bg-slate-900">
    <Banner />
    <NuxtPage />
  </div>
</template>
<script>
import Banner from "./components/banner.vue";

export default {
  components: { Banner },
  watch: {
    $route() {
      location.reload();
    },
  },
  setup() {
    definePageMeta({
      pageTransition: {
        name: "rotate",
      },
    });
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700;800;900&display=swap");
* {
  font-family: "Alegreya Sans", sans-serif;
}
</style>
