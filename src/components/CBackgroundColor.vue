<template>
  <div class="block-wrapper block-height">
    <div 
      :style="{ backgroundColor: selected_color }"
      class="c-background-color"
    >
      Selected Color 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CBackgroundColor',  

    props: {
      selected_color: {
        type: String,
        default: ''
      }
    }
  }

</script>

<style lang="scss" scoped>

</style>