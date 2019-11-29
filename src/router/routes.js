const routes = [
  {
    path: '/',
    component: () => import('layouts/BasicPageLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/create',
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('layouts/BasicPageLayout.vue'),
    children: [{ path: '', name: 'create', component: () => import('../pages/CreatePage.vue') }],
  },
  {
    path: '/learn',
    component: () => import('layouts/BasicPageLayout.vue'),
    children: [{ path: '',
      name: 'learn',
     component: () => import('../pages/LearnPage.vue') }],
  },
  {
    path: '/browse',

    component: () => import('layouts/BasicPageLayout.vue'),
    children: [{ path: '',     name: 'browse', component: () => import('../pages/CardBrowserPage.vue') }],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
