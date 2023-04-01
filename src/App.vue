<template>
  <div class="container">

    <div class="row">

      <div class="col">
        <c-model 
          @changeCounter="changeCounter"
          :max_count="max_count"          
        />
      </div>

      <div class="col">
        <c-view-1 
          :counter="counter"
          @resetCounter="resetCounter"
        />
      </div>         

      <div class="col">
        <c-action-1 
          @increment="increment"
          :reset_counter="reset_counter"
        />
      </div>      
    </div>   
  </div>
</template>

<script>
import CView1 from './components/CView1.vue'
import CAction1 from './components/CAction1.vue'
import CModel from './components/CModel.vue'



export default {
  name: 'App',
  components: {
    CView1,
    CAction1,
    CModel
  },

  data() {
    return {
      counter: 0,
      reset_counter: 0, //так можно описать или лучше CamelCase?
      max_count: 10 
    }
  },

  methods: {
    increment() {
      console.log('increment') // не работает почему? [X] - есть ответ
      this.counter++  
      if (this.counter > this.max_count) {
        this.counter = 0
        // this.reset_counter = 0
      }
    },

    resetCounter() {      
      if (this.counter !== 0) {
        this.counter = 0 
        this.reset_counter++
        console.log('resetCounter')
      }            
      if (this.reset_counter > this.max_count) {
        this.reset_counter = 0
        // this.counter = 0        
      }      
    },

    changeCounter() {
      /* if (this.counter !== 0 && this.inputValue > 0) {
        this.counter++
      } */
    },
  }

}

      /* else {
        console.log('error_valid', val, this.max_count)
      } */
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  box-sizing: border-box;
}

.row {
  border: solid 2px #000;
  border-radius: 3px;
}

.col {
  padding: 25px;
}

.block-wrapper {
  border: solid 2px #000;
  padding: 25px;
  border-radius: 3px;
}

</style>
