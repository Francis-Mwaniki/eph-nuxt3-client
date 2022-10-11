<template>
  <div class="bg-white dark:bg-slate-900">
    <NuxtPage />
    <Footer1 />
  </div>
</template>
<script>
import Footer1 from "~~/components/Footer.vue";
export default {
  components: { Footer1 },
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
