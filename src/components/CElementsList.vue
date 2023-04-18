<template>
  <div class="block-wrapper block-height">
    <div class="c-elements-list">
      <pre>Elements: </pre>
      <div 
        v-for="item in colorIt"
        :key="item.id" 
        :style="{ backgroundColor: item.color }"      


        class="c-elements-list__item"
      >
        {{ item.id }}        
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
      },

      filterValue: {
        type: String,
        default: ''
      }

    },
    
    computed: {
      colorIt() {

        let self = this.listElements.map((item) => {

          let color = 'green'
          
          if (item.id >= 0 && item.id < 0.4) {
            color = 'black'
          } else if (item.id >= 0.4 && item.id < 0.6) {
            color = 'red'
          } 
            return {id: item.id, color: color}          
        }) 
          console.log(self)

          self = self.filter((item) => {
            return !this.filterValue || this.filterValue === item.color
          })
          return self
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