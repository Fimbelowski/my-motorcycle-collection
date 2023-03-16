import { type RouteRecordRaw } from 'vue-router';

import BmwF750Gs from '../views/BmwF750Gs.vue';
import DucatiMonster from '../views/DucatiMonster.vue';
import DucatiPanigaleV4 from '../views/DucatiPanigaleV4.vue';
import Home from '../views/Home.vue';
import IndianScoutBobber from '../views/IndianScoutBobber.vue';
import NotFound from '../views/NotFound.vue';
import RouteName from '@/types/RouteName';

const ROUTES: RouteRecordRaw[] = [
  {
    component: Home,
    name: RouteName.Home,
    path: '/',
  },
  {
    component: BmwF750Gs,
    name: RouteName.BmwF750GS,
    path: '/bmw-750-gs',
  },
  {
    component: DucatiMonster,
    name: RouteName.DucatiMonster,
    path: '/ducati-monster',
  },
  {
    component: DucatiPanigaleV4,
    name: RouteName.DucatiPanigaleV4,
    path: '/ducati-panigale-v4',
  },
  {
    component: IndianScoutBobber,
    name: RouteName.indianScoutBobber,
    path: '/indian-scout-bobber',
  },
  {
    component: NotFound,
    name: RouteName.NotFound,
    path: '/:pathMatch(.*)*',
  },
];

export default ROUTES;
