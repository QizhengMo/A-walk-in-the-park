<template>
  <v-container id="root">

    <MyHeader></MyHeader>
    <v-container id="main" class="d-flex">
        <div id="about-box">
          <h1>About Us</h1>
          <p>A Walk In The Park aims to provide an immersive tour of the artwork present in the Brisbane City Botanical Garden from the comforts of your home. Through this interactive website, we aim to provide art enthusiasts and curious Brisbane residents an opportunity to experience these unique pieces of art that help decorate the Brisbane City Botanical Garden through a virtual walk through while allowing users to view 3 dimensional models of the artwork and to have the opportunity  to learn more about the art, artist, location and description.</p>
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