<template>
  <div class="block-wrapper">
    <c-action-2
      @increment = "$emit('increment')"
      :reset_counter = "reset_counter"


    />

  </div>
</template>

<script>
import CAction2 from './CAction2'


  export default {
    name: 'CAction1',

    components: {
      CAction2
    },

    props: {
      reset_counter: {
        type: Number,
        default: 0
      }
    }
    
    
  }
</script>

<style lang="scss">

</style>