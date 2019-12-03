import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/profit-and-loss",
    name: "profit-and-loss",
    component: () => import("../views/ProfitAndLoss.vue")
  },
  {
    path: "/cash-flow",
    name: "cash-flow",
    component: () => import("../views/CashFlow.vue")
  },
  {
    path: "/open-positions",
    name: "open-positions",
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
