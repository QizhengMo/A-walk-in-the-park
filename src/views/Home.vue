<template>
  <v-container id="root">
    <MyHeader></MyHeader>

    <div id="main">
      <!-- Slide Show -->
      <v-carousel
        v-model="model"
        @change="control"
        hide-delimiters
        height="100%"
      >
        <v-carousel-item v-for="(art, i) in arts" :key="i">
          <v-sheet height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">
                ART {{art['Item_title']}}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <!-- Bottom Control Delimeter -->
      <v-row justify="space-between" id="controller">
        <v-progress-linear
          color="#03999e"
          buffer-value="0"
          v-bind:value=progress
          stream
          id="progress-bar"
        >
        </v-progress-linear>
        <template v-for="(art, i) in arts">
          <div class="v-col white--text" align="center" v-bind:key="i" style="z-index : 2">
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
            <v-col cols="6">
              <Models
                v-bind:model_title="arts[model]['Item_title']"
                id="model-area"
              >
              </Models>
            </v-col>

            <!-- ART Info-->
            <v-col cols="6" id="overlay-text">
              <h1>{{ arts[model]["Item_title"] }}</h1>
              <p>Artist: {{ arts[model]["Artist"] }}</p>
              <p>Material: {{ arts[model]["Material"] }}</p>
              <p>Installed Year: {{ arts[model]["Installed"] }}</p>
              <p>{{ arts[model]["Description"] }}</p>
            </v-col>
          </v-row>

          <!-- EXIT BTN-->

          <v-btn
            class="white--text"
            color="teal"
            @click="overlay = false"
            id="overlay-exit"
          >
            Hide Overlay
          </v-btn>
        </v-container>
      </v-overlay>
    </div>
  </v-container>
</template>



<script>
import MyHeader from "../components/MyHeader";
import Models from "../components/Models";

export default {
  name: "Home",

  data() {
    return {
      model: 0,

      // initial valye to control the indicator
      isActive: [true, false, false, false, false, false, false, false, false],
      overlay: false,
      zIndex: 1001,
    };
  },

  computed: {
    arts() {
      return this.$store.getters.arts().length != 0 ? this.$store.getters.arts() : [];
    },

    progress() {
      return this.model * (100/8);
    }
  },

  methods: {
    control: function () {
      let i;
      for (i = 0; i < 11; i++) {
        this.isActive[i] = false;
      }
      this.isActive[this.model] = true;
    },
  },

  components: {
    MyHeader,
    Models,
  },


  created() {
    // fetch data when the home page is created
    this.$store.dispatch('fetchArts');
  }

};
</script>


<style scoped>
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
  padding: 30px;

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
  bottom: 5%;
  right: 5%;
}
</style>