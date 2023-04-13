<template>
  <div class="block-wrapper block-height">
    <div class="c-elements-list">
      <pre>Elements: </pre>
      <div 
        v-for="item in listElements"
        :key="item.id"
        class="c-elements-list__item"
      >
        {{ listElements }}        
      </div>
      
    </div>

  </div>
</template>

<script>
  export default {
    name: 'CElementsList',

    props: {
      listElements: {
        type: Array,
        default: []
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.c-elements-list {
  flex-shrink: 0;

  &__item {
    border: 2px solid black;
    width: 100%;
    // height: 50px;

    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-bottom: 10px;
    background-color: black;
    color: white;
    border-radius: 5px;
  }
}

</style>