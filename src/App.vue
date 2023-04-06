<template>
  <div class="container">

    <div class="row">

      <div class="col">
        <c-registration                  
        />
      </div>

      <div class="col">
        <v-model                  
        />
      </div>

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

      <div class="col">
        <c-color />
      </div>

    </div>   
  </div>
</template>

<script>
import CRegistration from './components/CRegistration.vue'
import VModel from './components/VModel.vue'

import CView1 from './components/CView1.vue'
import CAction1 from './components/CAction1.vue'
import CModel from './components/CModel.vue'
import CColor from './components/CColor.vue'




export default {
  name: 'App',
  components: {
    CRegistration,
    VModel,
    CModel,
    CView1,
    CAction1,           
    CColor
  },

  data() {
    return {
      counter: 0,
      reset_counter: 0, //так можно или лучше CamelCase? нельзя через '-'
      max_count: 10,

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

    changeCounter(value) {
      this.counter = value
      console.log(value)
    },
    
  },

  

}
</script>

<style lang="scss">
* {
  box-sizing: border-box; // из-за этого result выходил за рамки c-registration
}

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

.input-wrapper {
  border: 0;
  outline: 0;
  background: 0;
  border-bottom: 1px solid black;
}


  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }  



</style>
