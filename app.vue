<template>
  <div class="dark:bg-slate-900">
    <NuxtPage />
  </div>
</template>
<script>
export default {
  components: {},
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
