<template>
  <div class="block-wrapper">
    <c-action-2
      @increment = "$emit('increment')"

    />

  </div>
</template>

<script>
import CAction2 from './CAction2'


  export default {
    name: 'CAction1',

    components: {
      CAction2
    }
    
    
  }
</script>

<style lang="scss">

</style>