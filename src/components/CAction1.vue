<template>
  <div class="block-c-action">
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
.block-c-action {
  border: solid 2px #000;
  padding: 25px;
  border-radius: 3px;
}

</style>