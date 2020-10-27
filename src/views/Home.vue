<template>
  <v-container id="root">

    <v-container id="header" class="d-flex">
      <div id="title">
        <h1>A Walk In</h1>
        <h1>The Park</h1>
      </div>

      <v-spacer></v-spacer>

      <div id="header-btn-group">
        <v-btn class="mx-2" fab color="white">
          <v-icon>mdi-comment-question-outline</v-icon>
        </v-btn>

        <v-btn class="mx-2" fab color="white" @click="play">
          <v-icon v-if="paused">mdi-play</v-icon>
          <v-icon v-if="!paused">mdi-pause</v-icon>
        </v-btn>

        <v-btn class="mx-2" fab color="white" @click="mute">
          <v-icon v-if="muted">mdi-volume-off</v-icon>
          <v-icon v-if="!muted">mdi-volume-source</v-icon>
        </v-btn>
      </div>
    </v-container>

    <div id="main">

      <div v-if="arts.length != 0">
        <video
          ref="mainVideo"
          autoplay
          :muted="muted"
          :src="videoLink"
          @timeupdate="currentTime = $event.target.currentTime"
        >
        </video>
      </div>

      <!-- Bottom Control Delimeter -->
      <v-row justify="space-between" id="controller">
        <v-progress-linear
          color="#03999e"
          buffer-value="0"
          v-bind:value="progress"
          stream
          id="progress-bar"
        >
        </v-progress-linear>
        <template v-for="(art, i) in arts">
          <div
            class="v-col white--text"
            align="center"
            v-bind:key="i"
            style="z-index: 2"
          >
            <button
              @click="
                isActive[model] = false;
                model = i;
                isActive[i] = true;
              "
              v-bind:class="{ active: isActive[i] }"
            ></button>
          </div>
        </template>
      </v-row>

      <!-- Learn More Floating Action Button -->
      <v-btn
        class="mx-2"
        fab
        dark
        color="#03999e"
        id="learn-more-btn"
        @click="overlay = !overlay"
      >
        Learn More
      </v-btn>

      <!-- Popup Overlay -->
      <v-overlay :z-index="zIndex" :value="overlay">
        <v-container v-if="arts.length != 0" class="black--text" id="overlay">
          <v-row>
            <v-col cols="6" id="overlay-text">
              <h1>{{ arts[model]["Item_title"] }}</h1>
              <p>Artist: {{ arts[model]["Artist"] }}</p>
              <p>Material: {{ arts[model]["Material"] }}</p>
              <p>Installed Year: {{ arts[model]["Installed"] }}</p>
              <p>{{ arts[model]["Description"] }}</p>

            </v-col>
            <v-col cols="6">
              <Models
                v-bind:model_title="arts[model]['Item_title']"
                id="model-area"
              >
              </Models>
            </v-col>

            <!-- ART Info-->

          </v-row>

          <!-- EXIT BTN-->

          <v-btn
            icon
            @click="overlay = false"
            id="overlay-exit"
            color="#03999e"
            x-large
          >
            <v-icon>mdi-close</v-icon>

          </v-btn>
        </v-container>
      </v-overlay>
    </div>
  </v-container>
</template>



<script>
import Models from "../components/Models";

export default {
  name: "Home",

  data() {
    return {
      model: 0,
      currentTime: 0,
      // initial valye to control the indicator
      isActive: [true, false, false, false, false, false, false, false, false],
      overlay: false,
      zIndex: 1001,
      muted: true,
      paused: false,
    };
  },

  computed: {
    arts() {
      return this.$store.getters.arts().length != 0
        ? this.$store.getters.arts()
        : [];
    },

    progress() {
      return (this.model + this.currentTime / 30) * (100 / 8) ;
      
    },

    videoLink() {
      return `/videos/${this.model+1}.mp4`
    }
  },

  created() {
    // fetch data when the home page is created
    this.$store.dispatch("fetchArts");
  },

  mounted() {},

  methods: {
    control: function () {
      let i;
      for (i = 0; i < 11; i++) {
        this.isActive[i] = false;
      }
      this.isActive[this.model] = true;
    },

    play: function () {
      if (this.$refs.mainVideo.paused) {
        this.$refs.mainVideo.play();
        this.paused = false;
      } else {
        this.$refs.mainVideo.pause();
        this.paused = true;
      }
    },

    mute: function () {
      this.muted = !this.muted;
      this.$refs.mainVideo.muted = this.muted;
    },
  },

  components: {
    Models,
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
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-radius: 20px;
}

a {
  text-decoration: none;
}


#root {
  height: 100vh;
  width: 100vw;
  min-width: 100vw;
  padding: 0px;
  margin: 0px;
}

#main {
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

video {
  width: 100%;
}


#controller {
  z-index: 1000;
  background-color: transparent;
  position: fixed;
  bottom: 10%;
  width: 80vw;
}

#controller .active {
  background-color: #03999e;
}

#controller div button {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 20px;
}

#progress-bar {
  position: absolute;
  top: 9px;
  left: 9px;
  z-index: 1;
}

#learn-more-btn {
  position: fixed;
  bottom: 30%;
  right: 10%;
  height: 200px;
  width: 200px;
  font-size: 20px;
}

#overlay {
  background-color: white;
  height: 70vh;
  width: 70vw;
  padding: 20px;

  box-shadow: 10px 10px #03999e;
  border: solid 2px #03999e;
}

#overlay .row {
  max-height: 100%;
  min-height: 100%;
  overflow: hidden;
}

#model-area {
  min-height: 100%;
  height: 100%;
}

#overlay-exit {
  position: absolute;
  top: 0px;
  right: 0px;
}
</style>