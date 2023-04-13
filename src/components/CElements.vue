<template>
  <div class="block-wrapper">
    <div class="c-elements">

      <div class="c-elements__items">
        <c-elements-list 
        :listElements="listElements"
        
        />
      </div>

      <div class="c-elements__buttons">
        <c-elements-action  
        @addElement="addElement"
        @removeElement="removeElement"
        
        />
      </div>
    </div>

    
  </div>
</template>

<script>
import CElementsList from './CElementsList.vue'
import CElementsAction from './CElementsAction.vue'

  export default {
    name: 'CElements',

    components: {
      CElementsList,
      CElementsAction   
    },

    data() {
      return {
        listElements: []
      }      
    },

    computed: {
      
    },

    methods: {
      addElement() {
        const idRandom = () => {
          return Math.random()
        }        
        this.listElements.push({id: idRandom()})
        console.log(idRandom())
      },
      removeElement() { 
        this.listElements.splice(0, 1)
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.c-elements {
  display: flex;
  justify-content: space-between;

  &__items {
    width: calc(50% - 5px);
    margin-right: 5px;
  }

  &__buttons {
    width: calc(50% - 5px);
    margin-left: 5px;
  }
}

</style>