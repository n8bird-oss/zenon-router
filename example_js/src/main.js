import { createRouter } from '../../dist';
import { Home } from './views/Home.js';
import { About } from './views/About.js';


const router = createRouter({
  history: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'About',
      path: '/about',
      component: About
    }
  ]
})

router.resolveRoute();

export default router;