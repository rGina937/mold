import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Champion from "../views/Champion.vue";
import Choice from "../views/Choice.vue";
import Photo from "../views/Photo.vue";
import Product from "../views/Product.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/about",
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/champion",
    name: "Champion",
    component: Champion,
  },
  {
    path: "/choice",
    name: "Choice",
    component: Choice,
  },
  {
    path: "/photo",
    name: "Photo",
    component: Photo,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
