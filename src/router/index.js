import Vue from 'vue';
import Router from 'vue-router';
import Posts from '../views/pages/Posts.vue';

Vue.use(Router);

const router = new Router({
  routes: [{
    path: '/',
    redirect: Posts
  }, {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
  ]
});

export default router;
