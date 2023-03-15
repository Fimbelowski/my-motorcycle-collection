import { type RouteRecordRaw } from 'vue-router';

import BmwF750Gs from '../pages/BmwF750Gs.vue';
import DucatiMonster from '../pages/DucatiMonster.vue';
import DucatiPanigaleV4 from '../pages/DucatiPanigaleV4.vue';
import Home from '../pages/Home.vue';
import IndianScoutBobber from '../pages/IndianScoutBobber.vue';
import NotFound from '../pages/NotFound.vue';
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
