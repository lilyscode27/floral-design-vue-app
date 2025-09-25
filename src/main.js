import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { useFavoritesStore } from "./stores/favorites";
import App from "./App.vue";

// Global styles
import './style/style.css';

// Global components
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SwitchThemeButton from "./components/SwitchThemeButton.vue";
import SwitchTextSizeButton from "./components/SwitchTextSizeButton.vue";

// routes
const routes = [
  {
    path: "/",
    component: () => import("./pages/Home.vue"),
    meta: { title: "Home" },
  },
  {
    path: "/about",
    component: () => import("./pages/About.vue"),
    meta: { title: "About Us" },
  },
  {
    path: "/all-flowers",
    component: () => import("./pages/AllFlowers.vue"),
    meta: { title: "All Flowers" },
  },
  {
    path: "/seasonal-flowers",
    component: () => import("./pages/SeasonalFlowers.vue"),
    meta: { title: "Seasonal Flowers" },
  },
  {
    path: "/native-flowers",
    component: () => import("./pages/NativeFlowers.vue"),
    meta: { title: "Native Flowers" },
  },
  {
    path: "/flowers-by-occasion",
    component: () => import("./pages/FlowersByOccasion.vue"),
    meta: { title: "Flowers by Occassion" },
  },
  {
    path: "/favorites",
    component: () => import("./pages/Favorites.vue"),
    meta: { title: "Favorites" },
  },
  {
    path: "/floral-designs",
    component: () => import("./pages/FloralDesigns.vue"),
    meta: { title: "Floral Designs" },
  },
  {
    path: "/gallery",
    component: () => import("./pages/Gallery.vue"),
    meta: { title: "Gallery" },
  },
  {
    path: "/request",
    component: () => import("./pages/Request.vue"),
    meta: { title: "Request" },
  },
  {
    path: "/faq",
    component: () => import("./pages/FAQ.vue"),
    meta: { title: "FAQ" },
  },
  {
    path: "/flower-care-tips",
    component: () => import("./pages/FlowerCareTips.vue"),
    meta: { title: "Flower Care Tips" },
  },
  {
    path: "/contact",
    component: () => import("./pages/Contact.vue"),
    meta: { title: "Contact Us" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Set document title whenever route changes
router.beforeEach((to) => {
  document.title = to.meta.title;
});

const app = createApp(App);

// Register global components
app.component("Header", Header);
app.component("Footer", Footer);
app.component("SwitchThemButton", SwitchThemeButton);
app.component("SwitchTextSizeButton", SwitchTextSizeButton);

app.use(createPinia());

const favoritesStore = useFavoritesStore();
favoritesStore.loadFromLocalStorage(); // Load favorite flowers list from local storage

app.use(router);
app.mount("#app");
