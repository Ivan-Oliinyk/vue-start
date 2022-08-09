<template>
  <div class="page-container">
    <div class="header-container">
      <my-input v-focus v-model.trim="searchQuery" placeholder="Search" />
      <div class="btn-container">
        <my-button @click="showDialog">Create post</my-button>
        <my-select v-model="selectedSort" :options="sortOptions" />
      </div>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
        v-if="!isPostsLoading"
        :posts="sortedAndSearchPosts"
        @remove="removePost"
    />
    <div v-else style="font-size: 2rem">Post loading ...</div>
    <div v-intersection="loadMorePosts" class="observe"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";

export default {
  components: {
    MyButton,
    PostList,
    PostForm,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "Sort by name" },
        { value: "body", name: "Sort by body" },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },

    removePost(post) {
      this.posts = this.posts.filter(({ id }) => id !== post.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },

    onChangePage(pageNumber) {
      this.page = pageNumber;
      // this.fetchPosts();
    },

    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`,
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
        );
        this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (err) {
        alert(err);
      } finally {
        this.isPostsLoading = false;
      }
    },

    async loadMorePosts() {
      try {
        this.page += 1;

        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`,
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
        );
        this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (err) {
        alert(err);
      } finally {
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },

  watch: {
    selectedSort(newValue) {
      this.posts.sort((a, b) => a[newValue]?.localeCompare(b[newValue]))
    },

  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
          a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },

    sortedAndSearchPosts() {
      return this.sortedPosts.filter((post) =>
          (post.title + post.body)
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.page-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  color: darkslateblue;
}

.header-container {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
}

.title {
  font-size: 3rem;
  font-weight: 600;
}

.btn-container {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
}

.observe {

}

</style>
