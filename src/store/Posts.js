import client from '../client';

export default {
  namespaced: false,

  state: {
    posts: []
  },

  getters: {
    getPosts: (state) => state.posts
  },

  mutations: {
    loadPosts(state, posts) {
      state.posts = posts;
    },
    updatePost(state, payload) {
      const index = state.post.findIndex(post => post.id == payload.id);
      if (index != -1) {
        state.posts[index] = payload;
      }
    }
  },

  actions: {
    fetchPosts({ commit }) {
      return client({
        method: 'get',
        url: `/posts`
      })
        .then((response) => {
          commit('loadPosts', response.data);
          return response;
        }).catch((error) => {
          console.error(error);
          return error;
        });
    },
    updatePost({ commit }, post) {
      return client({
        method: 'put',
        url: `/posts/${post.id}`
      })
        .then((response) => {
          commit('updatePost', response.data);
          return response;
        }).catch((error) => {
          console.error(error);
          return error;
        });
    },
    
    createPost({ commit }, post) {
      return client({
        method: 'post',
        url: `/posts/`
      })
        .then((response) => {
          commit('addPost', response.data);
          return response;
        }).catch((error) => {
          console.error(error);
          return error;
        });
    }
  }
};


