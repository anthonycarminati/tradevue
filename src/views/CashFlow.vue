<template>
  <div>
    <h1>Cash Flow</h1>
    <v-divider />
    <ul>
      <li v-for="transaction in ibkrData.cash" :key="transaction.transactionID">
        {{ transaction }}
      </li>
    </ul>
  </div>
</template>

<script>
import ibkrData from "../assets/ibkrData.js";

export default {
  name: "CashFlow",
  data: () => ({
    ibkrData
  })
};
</script>

<style></style>
