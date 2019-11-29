const routes = [
  {
    path: '/',
    component: () => import('layouts/BasicPageLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },
  {
    path: '/create',
    name: 'create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('layouts/BasicPageLayout.vue'),
    children: [{ path: '', component: () => import('../pages/CreatePage.vue') }],
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('layouts/BasicPageLayout.vue'),
    children: [{ path: '', component: () => import('../pages/LearnPage.vue') }],
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
