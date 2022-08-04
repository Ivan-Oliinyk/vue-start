<template>
  <div class="container">
    <!--    подписываемся на событие-->
    <post-form @create="createPost" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostList,
    PostForm,
  },

  data() {
    return {
      posts: [
        { id: 1, title: "Javascript", body: "some description" },
        { id: 2, title: "HTML", body: "some description" },
        { id: 3, title: "CSS", body: "some description" },
        { id: 4, title: "React", body: "some description" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

ul,
ol,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.container {
  padding: 2rem;
}
</style>
