<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Tradevue</v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="link in links"
        :key="link.label"
        text
        rounded
        :to="link.url"
        >{{ link.label }}</v-btn
      >
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    links: [
      {
        label: "Home",
        url: "/"
      },
      {
        label: "Login",
        url: "/login"
      },
      {
        label: "Dashboard",
        url: "/dashboard"
      },
      {
        label: "Signup",
        url: "/signup"
      }
    ]
  })
};
</script>
