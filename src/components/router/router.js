import Main from "@/components/pages/Main"
import {createRouter, createWebHistory} from "vue-router"
import PostPage from "@/components/pages/PostPage";
import AboutPage from "@/components/pages/AboutPage"

const routes = [
  {
    path: "/",
    component: Main,
  },

  {
    path: "/posts",
    component: PostPage,
  },

  {
    path: "/about",
    component: AboutPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})



export default router