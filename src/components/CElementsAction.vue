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

      <div class="btn">
        <button            
          @click="onFilterBlack"    
          class="button"
        >
          filter black
        </button>
      </div>

      <div class="btn">
        <button          
          @click="onFilterRed"   
          class="button"
        >
          filter red
        </button>
      </div>

      <div class="btn">
        <button         
          @click="onFilterGreen" 
          class="button"
        >
          filter green
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
      },
      
      onFilterBlack() {
        this.$emit('FilterBlack')
        console.log('FilterBlack')

      },

      onFilterRed() {
        this.$emit('FilterRed')
        console.log('FilterRed')

      },

      onFilterGreen() {
        this.$emit('FilterGreen')
        console.log('FilterGreen')
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