<template>
  <li class="post">
    <div><strong>Name: </strong>{{ post.title }}</div>
    <div><strong>Description: </strong>{{ post.body }}</div>
    <close-btn @click="$emit('remove', post)"/>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  position: relative;
  font-size: 1.6rem;
  padding: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: lightgoldenrodyellow;
  color: darkslateblue;
}
</style>
