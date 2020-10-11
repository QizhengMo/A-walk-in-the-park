<template>
  <v-container id="root">

    <MyHeader></MyHeader>
    <v-container id="main" class="d-flex">
        <div id="about-box">
          <h1>Hello</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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