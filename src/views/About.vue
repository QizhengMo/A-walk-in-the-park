<template>
  <v-container id="root">

    <MyHeader></MyHeader>
    <v-container id="main" class="d-flex">
        <div id="about-box">
          <h1>About Us</h1>
          <p>A Walk in the Park aims to provide an immersive virtual tour of the permanent art
             installations present in the Brisbane city botanical garden while recounting small
              stories and memories of Brisbane throughout the ages. The walk features audios from 
              two interviews focused on the parklands and surrounding CBD recorded with the participant’s consent.</p>
          <p>Interview 1: Marie aged 88 and Kev aged 89 recount stories from the 1950s and 60s.</p>
          <p>Interview 2: Maureen aged 59 and Kerry aged 64 recount stories from the 1970s and 80s.</p>
          <p>To allow art enthusiasts and curious Brisbane residents the opportunity to fully experience
             these unique pieces of art that help decorate the Brisbane city botanical garden we have also generated 3
              dimensional models of the artwork. The software is free and can be downloaded <a href="https://alicevision.org/">HERE</a>.</p>

            <p>Within our website we have used data from the Brisbane City Council’s <a href="https://data.gov.au/dataset/ds-brisbane-1e11bcdd-fab1-4ec5-b671-396fd1e6dd70/details?fbclid=IwAR0EEg6_X87bDo-_Xgen-7H22GamSGKTmNR0pFmRG9YI1K9M01IppXFqGr8">Public Art Collections</a> API which can be found within the ‘Learn More’ section of each artwork. </p>
            
        </div>
    </v-container>

  </v-container>
</template>


<style scoped>
#root {
  height: 100vh;
  width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
  background-image: url("../assets/about.jpg");
  background-position: center;
  background-size: cover;
}

#main {
  min-width: 100%;
  flex-direction: row-reverse;
  
}

#about-box {
  height: 40vh;
  width: 40vw;
  margin-top: 30vh;
  margin-right: 10vw;
  padding: 30px;
  background-color: white;

  box-shadow: 10px 10px #03999e;
  border: solid 2px #03999e;

  overflow-y: scroll
}

#about-box h1 {
  font-size: 50px;
  font-weight: 500;
}

</style>

<script>
import MyHeader from '../components/MyHeader'

export default {

  name: "About",

  data: () => ({
    //
  }),
  components: {
    MyHeader,
  }
};
</script>