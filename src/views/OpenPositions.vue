<template>
  <div>
    <h1 class="centered">Open Positions</h1>
    <v-divider />
    <ul>
      <li v-for="pos in positions" :key="pos.symbol">{{ pos.symbol }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OpenPositions",
  data: () => ({
    positions: [
      {
        symbol: "aapl"
      },
      {
        symbol: "chwy"
      }
    ]
  })
};
</script>

<style></style>
