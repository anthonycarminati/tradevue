<template>
  <div>
    <v-container>
      <div class="flex-wrap d-flex">
        <v-card
          v-for="position in ibkrData.pos"
          :key="position.symbol"
          class="mx-auto mb-5"
          min-width="840"
          max-width="90%"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div
                class="body-2 font-weight-black text-uppercase mb-4"
                :style="sideStyle(position.Side)"
              >
                {{ position.Side }}
              </div>
              <v-list-item-title class="display-2 mb-1">
                {{ position.Symbol }}
              </v-list-item-title>
              <v-list-item-subtitle class="py-1 subtitle-2">
                {{ position.Description }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <v-row class="title-row" dense>
              <v-col cols="2">Quantity</v-col>
              <v-col cols="2">Mark Price</v-col>
              <v-col cols="2">Pos Value</v-col>
              <v-col cols="2">Open Price</v-col>
              <v-col cols="2">C/B Price</v-col>
              <v-col cols="2">C/B Value</v-col>
            </v-row>
            <v-row dense>
              <v-col cols="2">{{ position.Quantity }}</v-col>
              <v-col cols="2">{{ position.MarkPrice }}</v-col>
              <v-col cols="2">{{ position.PositionValue }}</v-col>
              <v-col cols="2">{{ position.OpenPrice }}</v-col>
              <v-col cols="2">{{ position.CostBasisPrice }}</v-col>
              <v-col cols="2">{{ position.CostBasisMoney }}</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import colors from "vuetify/lib/util/colors";
import ibkrData from "../assets/ibkrData.js";
// import { mapGetters } from "vuex";
// import {
//   colorByAmount,
//   formatLargeNumber,
//   formatMoney
// } from "@/utils/formatters";

export default {
  name: "OpenPositions",
  data: () => ({
    ibkrData
  }),
  methods: {
    sideStyle(positionSide) {
      const { blue, deepOrange } = colors;
      return {
        color: positionSide === "Long" ? blue.base : deepOrange.base
      };
    }
  }
};
</script>

<style></style>
