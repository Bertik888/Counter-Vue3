<template>
  <div class="block-wrapper"> 

    <div class="c-model">
      <div class="my-input">     
        input counter:    
        <input 
          v-model="inputValue"           
          type="number"
          class="input-wrapper"        
        >
      </div>
      <!-- :max_count="max_count" нужен ли тут пропс в инпуте? - [x] - ответ, нет не нужен-->

      <!-- В КАКОМ СЛУЧАЕ НАДО ПРОПИСЫВАТЬ ЭМИТЫ, ПЕРЕД ДАТОЙ ? - [x] - для того, чтобы подсвечивались при выборе после : -->
        
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
        if (this.inputValue <= this.max_count && this.inputValue !== 0) { 
          this.$emit('ChangeCounter', this.inputValue)
          this.inputValue = 0
          console.log('onChangeCounter')
        } else {
          console.log(`error_valid: число ${this.inputValue}, больше максимально допустимого ${this.max_count}`)
          this.inputValue = 0
          
        }
      }      
    }
  }
</script>





<style lang="scss">
.c-model {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  text-align: center;
}

// .input {
//   border: 0;
//   outline: 0;
//   background: 0;
//   border-bottom: 1px solid black;
// }

//   input[type="number"]::-webkit-outer-spin-button,
//   input[type="number"]::-webkit-inner-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }


</style>