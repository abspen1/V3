<template>
  <v-app
    id="app"
    :style="{background: $vuetify.theme.themes[theme].background}"
  >
    <app-menu />

    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <app-footer v-show="atAbout" /> -->
  </v-app>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";

export default {
  name: "App",
  components: {
    "app-menu": AppMenu,
  },
  data: () => ({
    //
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    atAbout() {
      return this.$route.name === "About" ? true : false;
    },
  },
};
</script>
