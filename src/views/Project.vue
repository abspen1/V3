<template>
  <div>
    <v-container>
      <v-row
        v-if="projInfo === null || projInfo === undefined"
        align-content="center"
        justify="center"
        class="pt-5 fill-height"
      >
        <v-col cols="6">
          <v-progress-linear
            indeterminate
            color="yellow darken-2"
          ></v-progress-linear>
        </v-col>
        {{ getProject() }}
      </v-row>
      <v-row v-else-if="projInfo.name !== name">
        {{ getProject() }}
      </v-row>
      <v-row v-else>
        <h1>Welcome to {{ name }} page</h1>
        <h2>Where is the demo?</h2>
        <h3>{{ projInfo.links }}</h3>
      </v-row>
      <v-row justify="center">
        <v-col
          sm="10"
          md="8"
        >
          <v-card class="pa-6">
            <div v-if="name === 'twitter-bot'">
              <twitter-bot />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TwitBotMD from "../components/README/TwitterBot.vue";

export default {
  props: {
    name: String,
  },
  components: {
    "twitter-bot": TwitBotMD,
  },
  data: () => ({}),
  methods: {
    getProject() {
      this.$store.commit("projectInfo", this.name);
    },
  },
  computed: {
    projInfo() {
      return this.$store.getters.currentProject;
    },
  },
  mounted() {
    this.getProject();
  },
};
</script>

<style scoped>
</style>