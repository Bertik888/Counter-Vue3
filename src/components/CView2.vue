<template>
  <div class="block-c-view">

    {{ counter }}

  </div>
</template>

<script>
  export default {
    name: 'CView2',

    props: {
      counter: {
        type: Number,
        default: 0
      }
    } 
  }
</script>

<style lang="scss" scoped>

</style>