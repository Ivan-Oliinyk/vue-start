import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      {value: "title", name: "Sort by name"},
      {value: "body", name: "Sort by body"},
    ],

  }),

  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((a, b) =>
          a[state.selectedSort]?.localeCompare(b[state.selectedSort])
      );
    },

    sortedAndSearchPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
          (post.title + post.body)
              .toLowerCase()
              .includes(state.searchQuery.toLowerCase())
      );
    },
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },

    setLoading(state, bool) {
      state.isPostsLoading = bool
    },

    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },

    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },

    setPage(state, page) {
      state.page = page
    },

    setLimit(state, limit) {
      state.limit = limit
    },

    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },

    setSortOptions(state, sortOptions) {
      state.sortOptions = sortOptions
    },

  },

  actions: {
    async fetchPosts({state, commit}) {
      try {
        commit('setLoading', true);
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`,
            {
              params: {
                _page: state.page,
                _limit: state.limit,
              },
            }
        );

        commit('setTotalPages', Math.ceil(
            response.headers["x-total-count"] / state.limit
        ))
        commit('setPosts', response.data)
      } catch (err) {
        alert(err);
      } finally {
        commit('setLoading', false)
      }
    },

    async loadMorePosts({state, commit}) {
      try {
        commit('setPage', state.page + 1)

        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts`,
            {
              params: {
                _page: state.page,
                _limit: state.limit,
              },
            }
        );
        commit('setTotalPages', Math.ceil(
            response.headers["x-total-count"] / state.limit
        ))

        commit('setPosts', [...state.posts, ...response.data])
      } catch (err) {
        alert(err);
      } finally {
      }
    },
  },

  namespaced: true

}