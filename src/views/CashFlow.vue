<template>
  <div>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="ibkrData.cash"
        class="elevation-1 ma-5"
        multi-sort
        :sort-by.sync="sortBy.name"
        :sort-desc="true"
        items-per-page="-1"
      ></v-data-table>
    </v-container>
  </div>
</template>

<script>
import ibkrData from "../assets/ibkrData.js";

export default {
  name: "CashFlow",
  data: () => ({
    ibkrData,
    sortBy: { name: "Date/Time" },
    headers: [
      { text: "Date", sortable: true, value: "Date/Time" },
      { text: "Description", sortable: false, value: "Description" },
      { text: "Amount", sortable: true, value: "Amount" },
      { text: "Type", value: "Type", filterable: true }
    ]
  })
};
</script>

<style></style>
