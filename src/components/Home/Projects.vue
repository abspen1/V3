<template>
  <div class="projects">
    <v-row>
      <v-col>
        <h2 class="accent--text font-weight-bold pb-1">My Favorite Projects</h2>
        <hr>
        <br>
      </v-col>
    </v-row>
    <v-row
      style="padding-bottom: 20vh;"
      justify="center"
      align="center"
      class="about"
    >
      <v-col cols="6">
        <v-chip
          class="ma-2"
          color="primary"
          label
          link
          href="https://austinspencer.works/twitter-bot"
          outlined
        >
          <v-icon left>
            mdi-twitter
          </v-icon>
          Twitter Bot
        </v-chip>
        <br>
        <br>
        <br>
        <v-card>
          <v-card-text>
            <p class="font-weight-bold">A script to automate Twitter functions for personal or commercial use. Integrated with Redis database and run as a
              Docker container on Kubernetes cluster. README on Master branch has detailed instructions for setting everything up,
              including, running on the cloud with Google or AWS.</p>
          </v-card-text>
        </v-card>

      </v-col>
      <v-col cols="6">
        <v-card class="mx-auto">
          <v-img src="twitbot.png"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.projects {
  font-family: monaco, Consolas, "Lucida Console", monospace;
}
</style>