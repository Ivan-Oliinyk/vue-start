<template>
  <div>
    <h3 class="title">Post list</h3>
    <ul class="post-container">
      <post-item v-for="post in posts" :post="post" />
    </ul>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 2rem;
  color: darkslateblue;
}
.post-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

@media screen and (max-width: 1400px) {
  .post-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 992px) {
  .post-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 576px) {
  .post-container {
    grid-template-columns: 1fr;
  }
}
</style>
