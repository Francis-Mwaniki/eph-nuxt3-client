<template>
  <main>
    <VerticalNav1 />
    <Login1 />
    <Footer />
  </main>
</template>

<script>
import Login1 from "~~/components/Login.vue";
import VerticalNav1 from "~~/components/verticalNav.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Login1, VerticalNav1, Footer },
};
</script>

<style></style>
