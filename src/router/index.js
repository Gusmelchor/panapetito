import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/pan",
    },
    {
      path:"/:categoria",
      name: "productos",
      component: () => import("@/views/ProductosView.vue"),
      props: true,
    },
    {
     path: '/autor',
     mane: 'autor',
     component: () => import('@/views/AutorView.vue')
    }
    
  ],
});

export default router;
