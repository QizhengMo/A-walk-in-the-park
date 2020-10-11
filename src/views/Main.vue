<template>
  <v-app>

    <v-main >
      <router-view>
      </router-view>
    </v-main>

    <MyFooter>

    </MyFooter>
  </v-app>
</template>

<script>
import MyFooter from '../components/MyFooter'

export default {

  name: "Main",

  data: () => ({
    //
  }),
  components: {
    MyFooter,
  }
};
</script>

<style>
html { overflow-y: auto }
</style>