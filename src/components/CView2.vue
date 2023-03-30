<template>
  <div class="block-wrapper">
    <div class="c-view-2">

      <div class="counter">
        {{ counter }}
      </div>
      
      <div class="btn">
        <button
          @click="$emit('increment')"
          
          class="button"
        >
          Reset
        </button>
      </div>
    </div>

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
.c-view-2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center
}

</style>