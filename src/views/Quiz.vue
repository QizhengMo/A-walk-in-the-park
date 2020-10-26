<template>
  <v-container id="root">

    <MyHeader></MyHeader>

    <v-container id="main">
      <div id="quiz-title" class="content-box">
        <h1>Challenge</h1>
      </div>
      <div id="quiz-questions" class="content-box">

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
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 15vh;
}

.content-box {
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white; 
  box-shadow: 10px 10px #03999e;
  border: solid 2px #03999e;
}

#quiz-title {
  height: 10vh;
}

#quiz-questions{
  height: 50vh;
  margin-top: 5vh;
}

#quiz-title h1 {
  color: black;
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