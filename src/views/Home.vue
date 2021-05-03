<template>
  <v-container class="pa-5 mb-5 pb-20">
    <landing />
    <about />
  </v-container>
</template>

<script>
import Landing from "../components/Home/Landing.vue";
import About from "../components/Home/About.vue";

export default {
  name: "Home",
  components: {
    landing: Landing,
    about: About,
  },
  methods: {
    USAA() {
      location.href = "https://www.usaa.com/";
    },
  },
};
</script>

<style scoped>
.usaa:hover {
  cursor: pointer;
}
</style>