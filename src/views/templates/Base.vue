<template>
<div class="@block header h-full">
  <div class="header lg:@flex  lg:@justify-center">
  </div>
  <div class="w-full">
    <div class="mx-64">
      <div class="@h-full lg:@pb-8 @block md:@flex md:@justify-between @mx-auto @bg-orange-700">

        <!-- Separator -->
        <div style="width:1px" class="@hidden md:@w-1/12 md:@block @mt-6 @bg-gray-400 @h-auto"></div>

        <!-- Section Content -->
        <div class="content-bg">
          <slot name="content">Current Section</slot>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Base',
};
</script>

<style scoped>
.header {
  background-color: #E5C7B7;
}

.max-width-lg {
  max-width: 80rem;
}
.content-bg{
  background-color: #EBE2DE;
}
</style>
