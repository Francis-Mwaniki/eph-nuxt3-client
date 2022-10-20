<template>
  <main>
    <Hero1 />
    <Footer />
  </main>
</template>

<script>
import Hero1 from "~~/components/Hero.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Hero1, Footer },
};
</script>
