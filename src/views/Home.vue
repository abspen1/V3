<template>
  <v-container class="pa-5 mb-5 pb-20">
    <v-row
      style="padding-top: 30vh; padding-bottom: 50vh;"
      justify="center"
      align="center"
    >
      <v-col
        sm="6"
        md="4"
        lg="4"
      >
        <span>Hello, my name is</span>
        <h1 class="primary--text">Austin Spencer</h1>
        <p>Thanks for visiting my website!</p>
      </v-col>
      <v-col
        sm="2"
        md="2"
        lg="2"
      >
        <v-btn
          outlined
          color="primary"
          href="mailto:abspencer2097@gmail.com"
        >
          Say Hi!
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      style="padding-bottom: 10vh;"
      justify="center"
      align="center"
      class="about"
    >
      <v-col
        sm="10"
        md="8"
        lg="6"
      >
        <h3>About Me</h3>
        <hr>
        <br>
        <p>I am a Senior at Arizona State University expecting to graduate in May, 2022 with a Computer Science degree. I am working as a Data Engineer Intern for <code
            @click="USAA()"
            class="usaa primary--text"
          >USAA</code> this summer. </p>
        <p>I grew up in central Illinois
          and moved to Arizona ~2 years ago. I originally went to school to study Biology but after a couple years, found my true passion in programming.
        </p>
        <p>When I'm not working or studying I like to hike and play sports. My newfound hobby that I enjoy a lot is snowboarding!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
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