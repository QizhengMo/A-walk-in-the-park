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
              <div class="display-3">ART {{ art["Item_title"] }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <!-- Bottom Control Delimeter -->
      <v-row justify="space-between" id="controller">
        <template v-for="(art, i) in arts">
          <div class="v-col white--text" align="center" v-bind:key="i">
            <button
              @click="
                isActive[model] = false;
                model = i;
                isActive[i] = true;
              "
              v-bind:class="{ active: isActive[i] }"
            ></button>
            <p>ART {{ i + 1 }}</p>
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
        <v-container class="black--text" id="overlay">
          <v-row>
            <!-- ART 3D MODEL-->
            <v-col cols="6">
              <!-- <div class="sketchfab-embed-wrapper">
                <iframe
                  title="A 3D model"
                  src="https://sketchfab.com/models/eca4fdaddd504f2da24c0863c0c2333c/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                  frameborder="0"
                  allow="autoplay; fullscreen; vr"
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                ></iframe>
              </div> -->
              <!-- <div
                class="cloudimage-360"
                data-folder="../assets/models/morning_star/"
                data-filename="Layer {index}.jpg"
                data-amount="35"
                data-magnifier="3"
                data-spin-reverse
            ></div> -->
                <vue-three-sixty 
                :amount=35
                imagePath="https://raw.githubusercontent.com/tobythy/botanic-garden-brisbane/main/models/morning_star/"
                fileName="Layer%20{index}.jpg"
              />
            </v-col>

            <!-- ART Info-->
            <v-col cols="6" style="overflow-y: scroll; height: 35vh">
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
import { jsonp } from "vue-jsonp";

export default {
  name: "Home",

  data() {
    return {
      arts: [],
      model: 0,
      isActive: [
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      overlay: false,
      zIndex: 1001,
    };
  },

  methods: {
    control: function () {
      console.log(this.model);
      let i;
      for (i = 0; i < 11; i++) {
        this.isActive[i] = false;
      }
      this.isActive[this.model] = true;
    },
  },

  components: {
    MyHeader,
  },

  mounted() {
    jsonp(
      "https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search",
      {
        resource_id: "3c972b8e-9340-4b6d-8c7b-2ed988aa3343", // the resource id
        q: "City Botanic Gardens, Brisbane CBD", // query for 'jones'
      }
    ).then((res) => (this.arts = res["result"]["records"]));
  },
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
  height: 50vh;
  width: 70vw;
  padding: 30px;

  box-shadow: 10px 10px #03999e;
  border: solid 2px #03999e;
}

.sketchfab-embed-wrapper {
  height: 100%;
}
.sketchfab-embed-wrapper iframe {
  min-width: 100%;
  min-height: 100%;
  height: 100%;
}

#overlay-exit {
  position: absolute;
  bottom: 5%;
  right: 5%;
}
</style>