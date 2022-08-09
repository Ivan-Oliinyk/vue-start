import Main from "@/pages/Main"
import {createRouter, createWebHistory} from "vue-router"
import PostsPage from "@/pages/PostsPage"
import PostPage from "@/pages/PostPage";
import AboutPage from "@/pages/AboutPage"
import PostPageWithStore from "@/pages/PostPageWithStore";

const routes = [
  {
    path: "/",
    component: Main,
  },

  {
    path: "/posts",
    component: PostsPage,
  },

  {
    path: "/about",
    component: AboutPage,
  },

  {
    path: "/posts/:id",
    component: PostPage,
  },


  {
    path: "/store",
    component: PostPageWithStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})



export default router