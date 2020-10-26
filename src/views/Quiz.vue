<template>
  <v-container id="root">

    <MyHeader></MyHeader>

    <v-container v-if="questions.length != 0" id="main">
      <div id="quiz-title" class="content-box">
        <h1>Challenge</h1> <h1>Current Score: {{currentScore}}</h1>
      </div>

      <div id="quiz-questions" class="content-box">
        <h2>Q{{currentQuestion}}: {{questions[currentQuestion - 1][2]}}</h2>

        <v-btn block class="white--text" color="#03999e" v-on:click="answerA">
          {{questions[currentQuestion - 1][0]}}
        </v-btn>

        <v-btn block class="white--text" color="#03999e" v-on:click="answerB">
          {{questions[currentQuestion - 1][1]}}
        </v-btn>
      </div>
    </v-container>
  </v-container>
</template>


<script>
import MyHeader from '../components/MyHeader'

export default {

  name: "About",

  data: () => ({
    currentQuestion: 1,
    currentScore: 0,
  }),

  computed: {
    arts() {
      return this.$store.getters.arts().length != 0 ? this.$store.getters.arts() : [];
    },
    questions() {
      
      if (this.arts.length == 0) {
        return [];
      } else {
        let questions = [];
        for (var i = 0; i < this.arts.length; i++) {
          var correctIndex = Math.floor(Math.random() * Math.floor(2));
          var question = [];
          question[correctIndex] = `${this.arts[i]['Artist']}`;
          question[1 - correctIndex] = `${this.arts[Math.floor(Math.random() * Math.floor(9))]['Artist']}`;
          question[2] = `Who is the Artist of ${this.arts[i]['Item_title']}`;
          question[3] = correctIndex;

          questions.push(question);
        }
        console.log(questions)
        return questions;
      }
    },

  },

  mounted() {
    if (this.arts.length == 0) {
      this.$store.dispatch('fetchArts');
    } 
  },

  methods: {
    answerA() {
      this.currentQuestion += 1;
      if (this.questions[this.currentQuestion][3] === 0) {
        this.currentScore += 1;
      }
    },

    answerB() {
      this.currentQuestion += 1;
      if (this.questions[this.currentQuestion][3] === 1) {
        this.currentScore += 1;
      }
    },
  },

  components: {
    MyHeader,
  },

};
</script>



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
  padding-left: 20vw;
  padding-right: 20px;
  justify-content: space-between;
}

#quiz-questions{
  height: 50vh;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
}

#quiz-title h1 {
  color: black;
}

button {
  margin-top: 50px;
}


</style>