<template>
  <v-container id="header" class="d-flex">
    <div id="title">
      <h1>A Walk In</h1>
      <h1>The Park</h1>
    </div>

    <v-spacer></v-spacer>
  </v-container>
</template>


<script>
export default {
  name: "MyHeader",

  data: () => ({

  }),

};
</script>

<style scoped>
#header {
  min-width: 100%;
  position: fixed;
  z-index: 100;
}

#title {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    0deg,
    #ffffff00 10%,
    #03999e 10%,
    #03999e 90%,
    #ffffff00 90%,
    #ffffff00 100%
  );
}

#title h1 {
  line-height: 60px;
  color: white;
  font-size: 75px;
}

</style>
