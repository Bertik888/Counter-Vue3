<template>
  <div class="block-wrapper">
      <c-view-2 
        :counter="counter"
        @resetCounter ="$emit('resetCounter')"
        
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


</style>