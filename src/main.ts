import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import App from '@/App.vue';
import routes from './router/routes';

library.add(faArrowLeft);

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount('#app');
