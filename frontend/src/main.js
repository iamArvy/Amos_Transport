import { createApp } from 'vue';
import './assets/style.css';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
const router = createRouter({
  history: createWebHistory('/your-github-repo/'),
  // base: process.env.NODE_ENV === 'production' ? '/amostransports/' : '/',
    routes,
  });
  router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });
  createApp(App)
    .use(router)
    .mount('#app');
