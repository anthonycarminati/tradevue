<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>
      Tradevue
    </v-toolbar-title>
    <v-spacer />
    <v-btn v-for="link in links" :key="link.label" text rounded :to="link.url">
      {{ link.label }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheNavBar",
  data: () => ({
    links: [
      {
        label: "Home",
        url: "/home"
      },
      {
        label: "P&L",
        url: "/profit-and-loss"
      },
      {
        label: "Cash Flow",
        url: "/cash-flow"
      },
      {
        label: "Open Positions",
        url: "/open-positions"
      }
    ]
  })
};
</script>

<style></style>
