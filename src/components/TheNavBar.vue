<template>
  <v-app-bar app color="primary" dark>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <v-toolbar-title>
      Tradevue
    </v-toolbar-title>
    <v-spacer />
    <v-btn
      v-for="link in links"
      :key="link.label"
      text
      rounded
      :to="{ name: link.name }"
    >
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
        name: "Home"
      },
      {
        label: "Open Positions",
        name: "OpenPositions"
      },
      {
        label: "P&L",
        name: "ProfitAndLoss"
      },
      {
        label: "Cash Flow",
        name: "CashFlow"
      }
    ]
  })
};
</script>

<style></style>
