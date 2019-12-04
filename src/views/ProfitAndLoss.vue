<template>
  <div>
    <h1>Profit and Loss</h1>
    <v-divider />
    <ul>
      <li v-for="security in ibkrData.pnl" :key="security.Symbol">
        {{ security }}
      </li>
    </ul>
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
