<template>
  <div class="page-container">
    <div class="header-container">
      <my-input v-model.trim="searchQuery" placeholder="Search" />
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
<!--    <div ref="observer"></div>-->

    <div class="pagination__wrapper">
      <div
        class="pagination-item"
        :key="pageNumber"
        v-for="pageNumber in totalPages"
        @click="onChangePage(pageNumber)"
        :class="{ 'pagination-item_current': page === pageNumber }"
      >
        {{ pageNumber }}
      </div>
    </div>
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

    // async loadMorePosts() {
    //   try {
    //     this.page += 1;
    //
    //     const response = await axios.get(
    //         `https://jsonplaceholder.typicode.com/posts`,
    //         {
    //           params: {
    //             _page: this.page,
    //             _limit: this.limit,
    //           },
    //         }
    //     );
    //     this.totalPages = Math.ceil(
    //         response.headers["x-total-count"] / this.limit
    //     );
    //     this.posts = [...this.posts, ...response.data];
    //   } catch (err) {
    //     alert(err);
    //   } finally {
    //   }
    // },
  },

  mounted() {
    this.fetchPosts();

    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },

  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue])
    //   })
    // }
    selectedSort(newValue) {
      this.posts.sort((a, b) => a[newValue]?.localeCompare(b[newValue]))
    },

    page() {
      this.fetchPosts();
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

.pagination__wrapper {
  display: flex;
  justify-content: center;
}

.pagination-item {
  min-inline-size: 4rem;
  padding: 10px;
  border-radius: 5px;
  background-color: green;
  color: beige;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s linear;
}

.pagination-item:hover,
.pagination-item:focus,
.pagination-item_current {
  background-color: chartreuse;
  color: darkslateblue;
  transform: scale(1.2);
}

.pagination-item:not(:last-of-type) {
  margin-inline-end: 1rem;
}
</style>
