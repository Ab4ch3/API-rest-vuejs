import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "../views/Dashboard.vue";
import Editar from "../views/Editar.vue";
import Nuevo from "../views/Nuevo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    // Pasando parametros por un ruta
    path: "/editar/:id",
    name: "Editar",
    component: Editar,
  },
  {
    path: "/nuevo",
    name: "Nuevo",
    component: Nuevo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
