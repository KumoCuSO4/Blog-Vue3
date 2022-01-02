import {createRouter, createWebHashHistory} from "vue-router";
const routes = [
  {
    path: '/',
    name: '主界面',
    component: () => import('@/layouts/mainLayout.vue')
  },
  {
    path: '/blog',
    name: '博客',
    redirect: '/blog/list',
    component: () => import('@/layouts/blogLayout.vue'),
    children: [
      {
        path: 'list',
        name: '博客列表',
        component: () => import('@/views/blog/index.vue')
      },
      {
        path: 'view/:blogName',
        name: '博客页面',
        component: () => import('@/views/blog/singleBlog.vue'),
        props: true
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;