<template>
  <div class="block-wrapper">

    <div class="c-registration">
      
      <div class="c-registration__input">      
        <c-registration-form 
          @sendForm="sendForm"     
          @response_400="response_400"     

        />
      </div>

      <div class="c-registration__result">  
        <c-registration-result 
          :result="result"      
          :result_2="result_2"    
        
        />
      </div>

    </div>

  </div>
</template>

<script>
import CRegistrationForm from './CRegistrationForm.vue'
import CRegistrationResult from './CRegistrationResult.vue'

  export default {
    name: 'CRegistration',

    components: {
      CRegistrationForm,
      CRegistrationResult
    },

    data() {
      return {
        result: undefined,
        result_2: []
      }
    },

    methods: {
      sendForm(formData) {
        this.result = formData
        // console.log(formData)
      },

      response_400(dataValid) {
        this.result_2 = dataValid
        console.log(dataValid)
      }
    }
    
    
  }
</script>

<style lang="scss" scoped>
.c-registration {
  display: flex;
  justify-content: space-between;
  // flex: 0 0 50%;  // что делает?
  // width: 50%; // не подходит
  // flex-basis: 50%; 
  // flex-grow: 1;

  &__input {
    width: calc(50% - 5px);
    // margin-right: 10px; // правильно ли задал, чтоб по центру был отступ ?
    margin-right: 5px;

  }
  &__result {
    width: calc(50% - 5px);
    margin-left: 5px;
  }
}

// .c-registration-result {
//   // min-height: 100%;      //как сделать равную высоту блоков? 
//   background: red;
// }
</style>