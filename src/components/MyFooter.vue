<template>
  <v-footer fixed color="white">
    <div id="logo" class="d-flex align-center">
      <span>DECO7180</span>
    </div>

    <div v-if="currentRouteName === 'About'" class="d-flex" id="btn-group">
      <v-btn text to="home">
        Home
      </v-btn>
      <v-btn text to="quiz">
        Quiz
      </v-btn>
      <v-btn text class="active" to="about">
        About
      </v-btn>
    </div>

    <div v-else-if="currentRouteName === 'Quiz'" class="d-flex" id="btn-group">
      <v-btn text to="home">
        Home
      </v-btn>
      <v-btn text class="active" to="quiz">
        Quiz
      </v-btn>
      <v-btn text to="about">
        About
      </v-btn>
    </div>

    <div v-else-if="currentRouteName === 'Home'" class="d-flex" id="btn-group">
      <v-btn text class="active" to="home">
        Home
      </v-btn>
      <v-btn text to="quiz">
        Quiz
      </v-btn>
      <v-btn text to="about">
        About
      </v-btn>
    </div>

  </v-footer>
</template>

<script>
export default {
  name: "MyFooter",

  data: () => ({
    //
  }),

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

#logo {
  font-weight: bold;
  font-size: 1.5em;
  position: absolute;
  left: 10px;
}

#btn-group {
  width: 100%;
  justify-content: center;
}

.active {
  color: white;
  background: linear-gradient(
    -45deg,
    #ffffff00 30%,
    #03999e 30%,
    #03999e 70%,
    #ffffff00 70%,
    #ffffff00 100%
  );
}
</style>
