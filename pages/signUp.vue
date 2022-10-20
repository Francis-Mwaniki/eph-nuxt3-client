<template>
  <main class="">
    <div class="">
      <VerticalNav1 />
    </div>
    <SignUpVue1 />
    <Footer />
  </main>
</template>

<script>
import VerticalNav1 from "~~/components/verticalNav.vue";
import SignUpVue1 from "~~/components/SignUp.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { VerticalNav1, SignUpVue1, Footer },
};
</script>

<style></style>
