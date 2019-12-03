<template>
  <div>
    <h1>Positions</h1>
    <ul>
      <li v-for="pos in positions" :key="pos.symbol">{{ pos.symbol }}</li>
    </ul>
  </div>
</template>

<script>
export default {
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
