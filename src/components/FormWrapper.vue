<template>
  <div class="flex flex-col justify-center gap-y-6 p-4">
    <form 
      class="flex flex-col gap-y-3 bg-white w-full shadow-md rounded-lg p-4 max-w-[396px] mx-auto"
    >
      <EmailInput 
        placeholder="Adresse e-mail ou numéro de tél." 
        v-model="user.email"
        :error="emailError"
      />
      <PasswordInput  
        placeholder="Mot de passe" 
        v-model="user.password" 
        :error="passwordError"
    />      
      <ButtonWrapper 
        name="Se connecter" 
        class="text-[20px] bg-[#1877f2] mt-1" 
        @click.prevent="login"
    />
    <ForgetPasswordOrSignUp />
    </form>
    <NewFacebookPage />
  </div>
</template>

<script>  
import ButtonWrapper from './ButtonWrapper.vue';
import EmailInput from './EmailInput.vue';
import PasswordInput from './PasswordInput.vue';
import ForgetPasswordOrSignUp from "./ForgetPasswordOrSignUp.vue";
import NewFacebookPage from './NewFacebookPage.vue';


export default {
  name: 'FormWrapper',
  components: { 
    ButtonWrapper, 
    EmailInput, 
    PasswordInput, 
    NewFacebookPage, 
    ForgetPasswordOrSignUp 
  },
  data() {
    return {
      user: {
        email: '',
        password:'',
      },
      emailError: "",
      passwordError: ""
    } 
  },
  methods: {
    login() {
      const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

      if(!this.user.email) {
        this.emailError = 'email required!'
      }
      else if(!this.user.email.match(pattern)) {
        this.emailError = 'email invalid'
      }
      else {
        this.emailError = ''
      }

      if(!this.user.password) {
        this.passwordError = "password required!"
      }
      else if(this.user.password !== "bonjour") {
        this.passwordError = "invalid password"
      }
      else {
        this.passwordError = ''
      }

      if(!this.emailError && !this.passwordError) {
        alert("tout est bon")
      }
    }
  }
}
</script>

