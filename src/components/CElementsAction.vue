<template>
  <div class="block-wrapper">
    <div class="c-elements-action">

      <div class="btn">
      <button        
        @click="onAddElement"
        class="button"
      >
        add element
      </button>
    </div>

    <div class="btn">
      <button        
        @click="onRemoveElement"        
        class="button"
      >
        remove element
      </button>
    </div>

    </div>


  </div>  
</template>

<script>
  export default {
    name: 'CElementsAction',

    methods: {
      onAddElement() {
        this.$emit('addElement')
        console.log('addElement')
      },

      onRemoveElement() {
        this.$emit('removeElement')
        console.log('removeElement')

      }      
    }
    
  }
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 40px;
  align-items: center;
}

</style>