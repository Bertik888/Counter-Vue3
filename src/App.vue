<template>
  <div class="container">

    <div class="row">

      <div class="col">
        <c-view-1 
          :counter="counter"
        />
      </div>         

      <div class="col">
        <c-action-1 />
      </div>
      
    </div>   

  </div>
  

</template>

<script>
import CView1 from './components/CView1.vue'
import CAction1 from './components/CAction1.vue'


export default {
  name: 'App',
  components: {
    CView1,
    CAction1
  },

  data() {
    return {
      counter: 0
    }
  }
}
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
}

.row {
  border: solid 2px #000;
  border-radius: 3px;
}

.col {
  padding: 25px;
}

</style>
