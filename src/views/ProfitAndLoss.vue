<template>
  <div>
    <v-container>
      <div class="flex-wrap d-flex">
        <v-card
          v-for="security in ibkrData.pnl"
          :key="security.Symbol"
          class="mx-auto mb-5"
          min-width="840"
          max-width="90%"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="display-2 mb-1">
                {{ security.Symbol }}
              </v-list-item-title>
              <v-list-item-subtitle class="py-1 subtitle-2">
                {{ security.Description }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="my-2" />
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
