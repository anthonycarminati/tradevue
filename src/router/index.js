import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/open-positions"
  },
  {
    path: "/open-positions",
    name: "OpenPositions",
    component: () => import("../views/OpenPositions.vue")
  },
  {
    path: "/profit-and-loss",
    name: "ProfitAndLoss",
    component: () => import("../views/ProfitAndLoss.vue")
  },
  {
    path: "/cash-flow",
    name: "CashFlow",
    component: () => import("../views/CashFlow.vue")
  },

  {
    path: "*",
    redirect: "/open-positions"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
