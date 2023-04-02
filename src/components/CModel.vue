<template>
  <div class="block-wrapper"> 

    <div class="c-model">
      <div class="my-input">     
        input counter:    
        <input 
          v-model="inputValue" 
          
          type="number"
          class="input"        
        >
      </div>
      <!-- :max_count="max_count" нужен ли тут пропс в инпуте? - [x] - ответ, нет не нужен-->
        
      <div class="btn">
        <button
          @click="onChangeCounter"          
          class="button"
        >
          change counter
        </button>
      </div>

    </div>

  </div>  
</template>


<script>
  export default {
    name: 'CModel',

    props: {
      max_count: {
        type: Number,
        default: 10
      },
    },

    data() {
      return {
        inputValue: 0
      }
      
    },

    methods: {
      onChangeCounter() {
        if (this.inputValue <= this.max_count) { 
          this.$emit('ChangeCounter', this.inputValue)
          this.inputValue = 0
        } else {
          console.log(`error_valid: число ${this.inputValue}, больше максимально допустимого ${this.max_count}`)
        }
      }      
    }
  }
</script>





<style lang="scss" scoped>
.c-model {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.input {
  border: 0;
  outline: 0;
  background: 0;
}

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }


</style>