import { createRouter, createWebHashHistory } from 'vue-router';

import { Home } from '@/modules/today';
import { Tomorrow } from '@/modules/tomorrow';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tmrrw',
    name: 'tomorrow',
    component: Tomorrow
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
