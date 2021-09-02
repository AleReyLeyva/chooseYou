import Home from '../views/Home.vue';
import Add from '../views/Add.vue';
import Find from '../views/Find.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
  },
];

export default routes;
