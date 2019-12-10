<template>
  <div>
    <v-container>
      <div class="flex-wrap d-flex">
        <PNLStockCard />
        <v-card
          v-for="security in ibkrData.pnl"
          :key="security.Symbol"
          class="mx-auto mb-5"
          min-width="840"
          max-width="90%"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="body-2 font-weight-black text-uppercase mb-4">
                {{ security.AssetClass }}
              </div>
              <v-list-item-title class="display-2 mb-1">
                {{ security.Symbol }}
              </v-list-item-title>
              <v-list-item-subtitle class="py-1 subtitle-2">
                {{ security.Description }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="my-2" />
          <v-card-text>
            <v-row class="title-row" dense>
              <v-col cols="2">Multiplier</v-col>
              <v-col cols="2">Strike</v-col>
              <v-col cols="2">Expiry</v-col>
              <v-col cols="2">Total Real PNL</v-col>
              <v-col cols="2">Total Unreal PNL</v-col>
              <v-col cols="2">Total FIFO PNL</v-col>
            </v-row>
            <v-row dense>
              <v-col cols="2">{{ security.Multiplier }}</v-col>
              <v-col cols="2">{{ security.Strike }}</v-col>
              <v-col cols="2">{{ security.Expiry }}</v-col>
              <v-col cols="2">
                {{ formatPrice(security.TotalRealizedPnl) }}
              </v-col>
              <v-col cols="2">
                {{ formatPrice(security.TotalUnrealizedPnl) }}
              </v-col>
              <v-col cols="2">
                {{ formatPrice(security.TotalFifoPnl) }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import ibkrData from "../assets/ibkrData.js";
import { formatPrice } from "../utils/formatters";
import PNLStockCard from "../components/PNLStockCard";

export default {
  name: "ProfitAndLoss",
  data: () => ({
    ibkrData
  }),
  methods: {
    formatPrice,
    PNLStockCard
  }
};
</script>

<style></style>
