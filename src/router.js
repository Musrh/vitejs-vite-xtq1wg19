import { createRouter, createWebHashHistory } from "vue-router";
import Contact from "./views/Contact.vue";
import Produits from "./views/Produits.vue";
import Accueil from "./views/Accueil.vue";

const routes = [
  { path: "/contact", component: Contact },
  { path: "/produits", component: Produits },
  {path:  "/accueil", component:  Accueil},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
