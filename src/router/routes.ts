import { type RouteRecordRaw } from "vue-router";

import BmwF750Gs from "../pages/BmwF750Gs.vue";
import DucatiMonster from "../pages/DucatiMonster.vue";
import DucatiPanigaleV4 from "../pages/DucatiPanigaleV4.vue";
import Home from "../pages/Home.vue";
import IndianScoutBobber from "../pages/IndianScoutBobber.vue";
import NotFound from "../pages/NotFound.vue";
import RouteNames from "@/types/RouteNames";

const ROUTES: RouteRecordRaw[] = [
  {
    component: Home,
    name: RouteNames.Home,
    path: "/",
  },
  {
    component: BmwF750Gs,
    name: RouteNames.BmwF750GS,
    path: "/bmw-750-gs",
  },
  {
    component: DucatiMonster,
    name: RouteNames.DucatiMonster,
    path: "/ducati-monster",
  },
  {
    component: DucatiPanigaleV4,
    name: RouteNames.DucatiPanigaleV4,
    path: "/ducati-panigale-v4",
  },
  {
    component: IndianScoutBobber,
    name: RouteNames.indianScoutBobber,
    path: "/indian-scout-bobber",
  },
  {
    component: NotFound,
    name: RouteNames.NotFound,
    path: "/:pathMatch(.*)*",
  },
];

export default ROUTES;
