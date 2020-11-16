<script>
export default {
  name: 'Post',
  props: {
    postInfo: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
<div class="py-10">
    <h1 class="font-bold text-2xl post-header">{{postInfo.title}}</h1>
  <div class="post-body">
    {{postInfo.body}}
  </div>
</div>
</template>

<style scoped>
.post-header{
color: #8E6D6E;
}

.post-body{
color: #508164;
}
</style>

