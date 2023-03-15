import { type RouteRecordRaw } from "vue-router";

import BmwF750Gs from "./pages/BmwF750Gs.vue";
import DucatiMonster from "./pages/DucatiMonster.vue";
import DucatiPanigaleV4 from "./pages/DucatiPanigaleV4.vue";
import Home from "./pages/Home.vue";
import IndianScoutBobber from "./pages/IndianScoutBobber.vue";
import NotFound from "./pages/NotFound.vue";

const ROUTES: RouteRecordRaw[] = [
  {
    component: Home,
    path: "/",
  },
  {
    component: BmwF750Gs,
    path: "/bmw-750-gs",
  },
  {
    component: DucatiMonster,
    path: "/ducati-monster",
  },
  {
    component: DucatiPanigaleV4,
    path: "/ducati-panigale-v4",
  },
  {
    component: IndianScoutBobber,
    path: "/indian-scout-bobber",
  },
  {
    component: NotFound,
    path: "/:pathMatch(.*)*",
  },
];

export default ROUTES;
