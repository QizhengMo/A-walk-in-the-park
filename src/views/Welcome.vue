<template>
  <container id="root">
    <div id="title">
      <h1>A Walk In</h1>
      <h1>The Park</h1>
    </div>

    <button>
      <router-link to="/main/home">Begin Tour</router-link>
    </button>

  </container>
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

#title {
  width: 30%;
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

button {
  width: 250px;
  height: 100px;
  margin-top: 10vh;
  background-color: #03999e;
  border-radius: 20px;
  border: white solid 10px;
}

button a {
  text-decoration: none;
  color: white;
  font-size: 30px;
}

</style>


