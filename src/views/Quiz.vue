<template>
  <v-container id="root">

    <MyHeader></MyHeader>


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