<template>
  <div>
    <h1 class="centered">Open Positions</h1>
    <v-divider />
    <ul>
      <li v-for="position in ibkrData.pos" :key="position.symbol">
        {{ position }}
      </li>
    </ul>
  </div>
</template>

<script>
import ibkrData from "../assets/ibkrData.js";

export default {
  name: "OpenPositions",
  data: () => ({
    ibkrData
  })
};
</script>

<style></style>
