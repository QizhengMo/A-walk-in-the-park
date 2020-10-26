import Vue from 'vue'
import Vuex from 'vuex'
import { jsonp } from "vue-jsonp";


Vue.use(Vuex)



export default new Vuex.Store({


  state: {
    arts: [],
  },

  getters: {

    arts: (state) => () => {
      return state.arts
    }
  },

  mutations: {
    addArt(state, arts) {
      state.arts = arts;
    }
  },

  actions: {

    fetchArts (context) {
      let tempList;
      let arts = [];
      let artsFilter = [
        "Morning Star II",
        "Building Blocks of Life",
        "Apparatus for Germination of Achaemienis Ambulatii (Pony Plant)",
        "Plant Form",
        "Walter Hill Fountain",
        "Sundial - Hibiscus Garden",
        "Jemmy Morrill and the brolgas",
        "Big Red (Red Kangaroo)",
        "Undercurrent",
      ];

      jsonp(
        "https://www.data.brisbane.qld.gov.au/data/api/3/action/datastore_search",
        {
          resource_id: "3c972b8e-9340-4b6d-8c7b-2ed988aa3343", // the resource id
          q: "City Botanic Gardens, Brisbane CBD",
        }
      )
      .then((res) => {
        tempList = res["result"]["records"];
      })
      .then(() => {
        tempList.forEach(
          (element) => {
            for (var i = 0; i < artsFilter.length; i++) {
              if (element["Item_title"] === artsFilter[i]) {
                arts[i] = element;
              }
            }
          },
        );
        context.commit('addArt', arts);
      });

    },


  },

  modules: {
  }
})
