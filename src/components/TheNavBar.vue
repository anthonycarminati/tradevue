<template>
  <v-app-bar app color="blue-grey" dark>
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
