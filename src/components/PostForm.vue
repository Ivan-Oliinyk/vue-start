<template>
  <form class="post-form" @submit.prevent>
    <h4>Create post</h4>
    <div>

      <my-input
          v-focus
          v-model.trim="post.title"
          placeholder="Enter new post name"
      />

      <my-input
          v-model.trim="post.body"
          placeholder="Enter new post description"
      />
      <my-button @click="createPost">Create</my-button>
    </div>
  </form>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
export default {
  components: {MyInput},
  data() {
    return {
      post: {
        title: "",
        body: "",
        age: ""
      }
    }
  },
  methods: {
    createPost() {
      if (!!this.post.title && !!this.post.body) {
        this.post.id = Date.now()
        // создаем событие
        this.$emit("create", this.post)
        this.post = {
          title: '',
          body: ''
        }

      } else {
        alert("Fields post name and post description must not be empty !");
      }
    }
  }
}
</script>

<style scoped>
.post-form {
  font-size: 1.6rem;
  color: beige;
  /*margin-block-end: 2rem;*/
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: lightsteelblue;
}

.post-form div {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media screen and (max-width: 768px) {
  .post-form div {
    grid-template-columns: 1fr;
  }
}

</style>