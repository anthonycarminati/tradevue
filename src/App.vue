<template>
  <v-app>
    <TheNavBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import TheNavBar from "./components/TheNavBar";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    TheNavBar
  }
};
</script>
