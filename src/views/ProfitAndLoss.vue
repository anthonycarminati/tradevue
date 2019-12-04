<template>
  <div>
    <v-container>
      <div class="flex-wrap d-flex">
        <v-card
          v-for="security in ibkrData.pnl"
          :key="security.Symbol"
          class="mx-auto mb-5"
          min-width="320"
          max-width="30%"
        >
          <v-list></v-list>
          <v-card-title>{{ security.Symbol }}</v-card-title>
          <v-card-subtitle>{{ security.AssetClass }}</v-card-subtitle>
          <v-card-text>{{ security.Description }}</v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import ibkrData from "../assets/ibkrData.js";

export default {
  name: "ProfitAndLoss",
  data: () => ({
    ibkrData
  })
};
</script>

<style></style>
