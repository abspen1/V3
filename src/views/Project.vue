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
      <v-row v-else>
        <h1>Welcome to {{ name }} page</h1>
        <h2>Where is the demo?</h2>
        <h3>{{ projInfo.items.demo }}</h3>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
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