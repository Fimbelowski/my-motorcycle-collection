import { type RouteRecordRaw } from 'vue-router';

import BaseMotorcycleView from '@/views/BaseMotorcycleView.vue';
import Home from '../views/Home.vue';
import MOTORCYCLES from '@/motorcycles';
import NotFound from '../views/NotFound.vue';
import RouteName from '@/types/RouteName';

const ROUTES: RouteRecordRaw[] = [
  {
    component: Home,
    name: RouteName.Home,
    path: '/',
  },
  {
    component: BaseMotorcycleView,
    name: RouteName.BmwF750GS,
    path: '/bmw-750-gs',
    props: {
      motorcycle: MOTORCYCLES.bmwF750Gs,
    },
  },
  {
    component: BaseMotorcycleView,
    name: RouteName.DucatiMonster,
    path: '/ducati-monster',
    props: {
      motorcycle: MOTORCYCLES.ducatiMonster,
    },
  },
  {
    component: BaseMotorcycleView,
    name: RouteName.DucatiPanigaleV4,
    path: '/ducati-panigale-v4',
    props: {
      motorcycle: MOTORCYCLES.ducatiPanigaleV4,
    },
  },
  {
    component: BaseMotorcycleView,
    name: RouteName.indianScoutBobber,
    path: '/indian-scout-bobber',
    props: {
      motorcycle: MOTORCYCLES.indianScoutBobber,
    },
  },
  {
    component: NotFound,
    name: RouteName.NotFound,
    path: '/:pathMatch(.*)*',
  },
];

export default ROUTES;
