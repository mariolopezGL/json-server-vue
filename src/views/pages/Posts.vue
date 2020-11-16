<script>
import Post from '../atoms/Post';
import LineSeparator from '../atoms/LineSeparator';
import {
  mapActions,
  mapGetters
} from 'vuex';

export default {
  name: 'Posts',
  components: {
    Post,
    LineSeparator
  },
  computed: {
    ...mapGetters(['getPosts']),
    getPostsList() {
      if (this.loading) {
        return [];
      }
      return  this.getPosts;
    }
  },
  methods: {
    ...mapActions(['fetchPosts'])
  },
  created() {
    this.loading = true;
    this.periodId = this.$route.params.periodId;
    this.fetchPosts().then(() => {
      this.loading = false
    });
  },
  data() {
    return {
      periodId: -1,
      loading: true
    }
  }
}
</script>
<template>
<div class="mx-20 pt-10">
  <h1 class="text-gray-800 font-bold text-4xl">POSTS</h1>
  <div v-if="!loading">
    <div class="mt-4 mx-auto mb-4" v-for="(p, index) in getPostsList" :key="index">
      <post :postInfo="p"></post>
      <line-separator class="mt-6"></line-separator>
    </div>
  </div>
</div>
</template>
