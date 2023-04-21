import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/DashboardView.vue"),
  },
  {
    path: "/theme",
    name: "theme",
    component: () => import("@/views/ThemeView.vue"),
  },
  {
    path: "/shoppingcar",
    name: "shoppingcar",
    component: () => import("@/views/ShoppingCarView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/views/SigninView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignupView.vue"),
  },
  {
    path: "/resetpasswrd",
    name: "resetpasswrd",
    component: () => import("@/views/ResetPasswordView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
