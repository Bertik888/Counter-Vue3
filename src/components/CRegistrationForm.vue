<template>
  <div class="block-wrapper">
    <div class="c-registration-form">

      <div class="my-input">   
        <input
          v-model="inputNameForm"
          
          placeholder="input name:"           
          type="text"
          class="input-wrapper"        
        >
      </div>

      <div class="my-input">   
        <input     
          v-model="inputLoginForm"    
          placeholder="input login:"  
          type="text"              
          class="input-wrapper"        
        >
      </div>
      <!-- type="login" - существует такой тип? - нет; тип майл? - да
          :value = как используется? когда v-model, а когда :value ?  -->
      <div class="my-input">     
        <input        
          v-model="inputEmailForm"
          placeholder="input email:"
          type="email"
          class="input-wrapper"        
        >
      </div>

      <div class="my-input">   
        <input        
          v-model="inputPasswordForm"
          placeholder="input password:"
          type="password"
          class="input-wrapper"        
        >
      </div>    

    </div>

    <div class="btn">
      <button        
        @click="onChangeForm"
        class="button"
      >
        send form
      </button>
    </div>
    
  </div>
</template>

<script>
import {createUser} from '@/api/fakeUser'

  export default {
    name: 'CRegistrationForm',
    

    data() {
      return {
        inputNameForm: '',
        inputLoginForm: '',
        inputEmailForm: '',
        inputPasswordForm: ''
      }
    },

    methods: {
      async onChangeForm() {
        const data = {
          name: this.inputNameForm,
          login: this.inputLoginForm,
          email: this.inputEmailForm,
          password: this.inputPasswordForm
        }

        createUser(data).then(response => {
          if (response.data.status === 400) {
            this.$emit('response_400', response.data)
          }

          if (response.data.status === 200) {
            this.$emit('response_200', response.data)
          }
          console.log(response.data)
          console.log(response)
        })

        const formData = {
          inputNameForm: this.inputNameForm,
          inputLoginForm: this.inputLoginForm,
          inputEmailForm: this.inputEmailForm,
          inputPasswordForm: this.inputPasswordForm
        }
          this.$emit('sendForm', formData)
          this.resetForm()
          console.log('onChangeForm')
      },

      resetForm() {
        this.inputNameForm = ''
        this.inputLoginForm = ''
        this.inputEmailForm = ''
        this.inputPasswordForm = ''
      }
    }

    
  }
</script>

<style lang="scss" scoped>
.my-input {
  margin-bottom: 50px; // правильно ли задано? - 
}

</style>