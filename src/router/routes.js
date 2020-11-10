import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Generate from '../views/generate.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/generate',
    name: 'Generate',
    component: Generate,
  },
];

export default routes;
