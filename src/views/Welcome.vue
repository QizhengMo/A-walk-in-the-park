<template>
  <div id="root">
    <div id="wrapper">
      <div id="title">
        <h1>A Walk In</h1>
        <h1>The Park</h1>
      </div>

      <div id="subtitle">
        <p>A walk through the Botanical Gardens to see how they are now, while we remember how Brisbane was then</p>

      </div>

      <button>
        <router-link to="/main/home">BEGIN TOUR</router-link>
      </button>
    </div>


  </div>
</template>

<style scoped>

#root {
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/main.jpg");
  background-position: center;
  background-size: cover;
}

#wrapper {
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px;

  background:  #00000033;
}

#title {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(0deg,  #ffffff00 10%, #03999e 10% , #03999e 90%, #ffffff00 90%, #ffffff00 100%);
}

#title h1 {
  line-height: 80px;
  color: white;
  font-size: 100px;
}

#subtitle {
  margin-top: 30px;
  line-height: 40px;
  color: white;
  font-size: 50px;
}

#subtitle p {
  width: 100%;
  text-align: center;
}

button {
  width: 250px;
  height: 100px;
  margin-top: 10vh;
  background-color: #03999e;
  transition-duration: 0.4s;
  border-radius: 5px;
  letter-spacing: 2.5px;


}

button:hover {
  background-color: #03999e9a;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  letter-spacing: 1px;

}

button a {
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  color: white;
}

</style>


<script>

export default {

  name: "Welcome",

  data: () => ({
    //
  }),
  components: {
    
  }
};
</script>