<template>
  <v-container id="header" class="d-flex">
    <div id="title">
      <h1>A Walk In</h1>
      <h1>The Park</h1>
    </div>

    <v-spacer></v-spacer>

    <div v-if="currentRouteName === 'Home'" class="d-flex" id="header-btn-group">
      <v-btn class="mx-2" fab color="white" @click="greet">
        <v-icon>mdi-comment-question-outline</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab color="white">
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab color="white">
        <v-icon>mdi-volume-source</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>


<script>
export default {
  name: "MyHeader",

  data: () => ({
    //
  }),

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  
  components: {},

  methods: {
    greet: function () {
      // `this` inside methods points to the Vue instance
      alert("Hello ");
      // `event` is the native DOM event
    },
  },
};
</script>

<style scoped>
#header {
  min-width: 100%;
  position: fixed;
  z-index: 100;
}

#title {
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    0deg,
    #ffffff00 10%,
    #03999e 10%,
    #03999e 90%,
    #ffffff00 90%,
    #ffffff00 100%
  );
}

#title h1 {
  line-height: 60px;
  color: white;
  font-size: 75px;
}

#header-btn-group {
  margin-right: 20px;
}

a {
  text-decoration: none;
}
</style>
