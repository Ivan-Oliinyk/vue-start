<template>
  <div class="page-container">

    <div class="header-container">
      <my-input
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Search..."
          v-focus
      />
      <div class="btn-container">
        <my-button @click="showDialog">Create post</my-button>
        <my-select
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
            :options="sortOptions"
        />
      </div>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
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
import axios from "axios";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex"
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";


export default {
  components: {
    MyButton,
    PostList,
    PostForm,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },

  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),

    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },

    removePost(post) {
      this.posts = this.posts.filter(({id}) => id !== post.id);
    },

    showDialog() {
      this.dialogVisible = true;
    },
  },

  mounted() {
    this.fetchPosts();
  },

  watch: {},

  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),

    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchPosts: "post/sortedAndSearchPosts"
    })
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
