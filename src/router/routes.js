const routes = [
  {
    path: '/',
    component: () => import('layouts/BasicLayout.vue'),
    children: [
      { path: '', component: () => import('pages/OverviewPage.vue') },
      { path: '/create', name: 'create', component: () => import('../pages/CreatePage.vue') },
      { path: '/learn', name: 'learn', component: () => import('../pages/LearnPage.vue') },
      { path: '/browse',     name: 'browse', component: () => import('../pages/CardBrowserPage.vue') }
    ],
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
