import { createRouter, createWebHashHistory } from "vue-router";
import Contact from "./views/Contact.vue";
import Produits from "./views/Produits.vue";

const routes = [
  { path: "/contact", component: Contact },
  { path: "/produits", component: Produits },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
