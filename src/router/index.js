import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue")
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
    path: "/open-positions",
    name: "OpenPositions",
    component: () => import("../views/OpenPositions.vue")
  },
  {
    path: "*",
    component: () => import("../views/Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
