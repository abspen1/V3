<template>
  <v-app
    id="app"
    :style="{background: $vuetify.theme.themes[theme].background}"
  >
    <app-menu />

    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer v-show="atHome" />
  </v-app>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    "app-menu": AppMenu,
    "app-footer": AppFooter,
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
    atHome() {
      return this.$route.name === "Home" ? true : false;
    },
  },
};
</script>
