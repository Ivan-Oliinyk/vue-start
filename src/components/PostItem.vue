<template>
  <li class="post">
    <span>{{ post.id }}</span>
    <div><strong>Name: </strong>{{ firstSymbolToUpperCase(post.title) }}</div>
    <div>
      <strong>Description: </strong>{{ firstSymbolToUpperCase(post.body) }}
    </div>
    <close-btn @click="$emit('remove', post)" />
    <my-button @click="$router.push(`/posts/${post.id}`)">Read mode</my-button>
  </li>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    firstSymbolToUpperCase(str) {
      return str[0].toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style scoped>
.post {
  position: relative;
  font-size: 1.6rem;
  padding: 3rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: lightgoldenrodyellow;
  color: darkslateblue;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
</style>
