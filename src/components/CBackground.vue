<template>
  <div class="block-wrapper"> 

    <div class="c-background">

      <div class="c-background__color">
        <c-background-color 
          :selected_color="selected_color"        
        />
      </div>

      <div class="c-background__button">
        <c-background-button 
          @changeColor="changeColor"
        />
      </div>

    </div>

  </div>
</template>

<script>
import CBackgroundColor from './CBackgroundColor.vue'
import CBackgroundButton from './CBackgroundButton.vue'



  export default {
    name: 'CBackground',

    components: {
      CBackgroundColor,
      CBackgroundButton
    },

    data() {
      return {
        selected_color: ''
      }
    },

    methods: {
      changeColor(value) {
        this.selected_color = value
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.c-background {
  display: flex;
  justify-content: space-between;

  &__color {
    width: calc(50% - 5px);
    margin-right: 5px;
  }

  &__button {
    width: calc(50% - 5px);
    margin-left: 5px;
  }
}

</style>