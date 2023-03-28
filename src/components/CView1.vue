<template>
  <div class="block-c-view">
    <c-view-2 
      :counter="counter"
    />
  </div>

</template>

<script>
import CView2 from './CView2'

  export default {
    name: 'CView1',
    
    components: {
      CView2
    },

    props: {
      counter: {
        type: Number,
        default: 0
      }
    }    
  }
  
</script>

<style lang="scss">
.block-c-view {
  border: solid 2px #000;
  padding: 25px;
  border-radius: 3px;
}

</style>