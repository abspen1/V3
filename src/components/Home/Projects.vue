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
      style="padding-bottom: 10vh;"
      justify="center"
      align="center"
      class="about"
      wrap
    >
      <v-col
        sm="10"
        md="6"
      >
        <v-row justify="space-around">
          <v-col>
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
          </v-col>
        </v-row>
        <v-row justify="space-around">
          <v-col>
            <p>
              <code class="pa-2">
                <v-icon>mdi-menu</v-icon> > Projects > Python > Twitter Bot
              </code>
            </p>
          </v-col>
        </v-row>
        <br>
        <br>
        <br>
        <v-card>
          <v-card-text>
            <p class="font-weight-bold">A script to automate Twitter functions for personal or commercial use. Integrated with Redis database and run as a
              Docker container on Kubernetes cluster. README on Master branch has detailed instructions for setting everything up,
              including, running on the cloud with Google or AWS.
            </p>
          </v-card-text>
        </v-card>

      </v-col>
      <v-col
        sm="10"
        md="6"
      >
        <v-card class="mx-auto">
          <v-img src="twitbot.png"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      style="padding-bottom: 20vh;"
      justify="center"
      align="center"
      class="about"
      wrap
    >

      <v-col
        sm="10"
        md="6"
      >
        <v-row justify="space-around">
          <v-col>
            <v-chip
              class="ma-2"
              color="primary"
              label
              link
              href="https://captrack.laudecapital.com/#/"
              outlined
            >
              <v-icon left>
                mdi-chart-line
              </v-icon>
              Capital Tracker
            </v-chip>
          </v-col>
        </v-row>
        <v-row justify="space-around">
          <v-col class="mt-3">
            <p>
              <code class="pa-2">
                <v-icon>mdi-menu</v-icon> > Projects > Vue.js > Capital Tracker
              </code>
            </p>
          </v-col>
        </v-row>
        <br>
        <br>
        <br>
        <v-card>
          <v-card-text>
            <p class="font-weight-bold">Capital Tracker is an applications built by options
              traders for options traders. The goal of Capital Tracker is to provide users with a
              place to keep track of trades and find optimal strategies. Uses <a
                style="text-decoration: none;"
                href="https://www.meteor.com/"
              >Meteor</a> with
              MongoDB and Vue.js to build a smooth application that allows for great user interaction.
            </p>
          </v-card-text>
        </v-card>

      </v-col>
      <v-col
        sm="10"
        md="6"
      >
        <v-card class="mx-auto">
          <v-img src="captrack.png"></v-img>
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