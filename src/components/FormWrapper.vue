<template>
  <div class="flex flex-col justify-center gap-y-6 p-4">
    <form 
      class="flex flex-col gap-y-3 bg-white w-full shadow-md rounded-lg p-4 max-w-[396px] mx-auto"
    >
      <EmailInput 
        placeholder="Adresse e-mail ou numéro de tél." 
        v-model="userInfo.email"
        @checkEmail="getEmailState"
        :show="hasClicked"
      />
      <PasswordInput  
        placeholder="Mot de passe" 
        v-model="userInfo.password" 
        @checkPassword="getPasswordState"
        :show="hasClicked"
    />      
      <ButtonWrapper 
        name="Se connecter" 
        class="text-[20px] bg-[#1877f2] mt-1" 
        @click.prevent="userInfoValidate"
    />
    <SignInOrSignUp />
    </form>
    <Links/>
  </div>
</template>

<script>  
import ButtonWrapper from './ButtonWrapper.vue';
import EmailInput from './EmailInput.vue';
import PasswordInput from './PasswordInput.vue';
import SignInOrSignUp from "./SignInOrSignUp.vue";
import Links from './Links.vue';


export default {
  name: 'FormWrapper',
  components: { 
    ButtonWrapper, 
    EmailInput, 
    PasswordInput, 
    Links, 
    SignInOrSignUp 
  },
  data() {
    return {
      userInfo: {
        email: '',
        password:'',
      },
      hasClicked: false,
      state: {
        email: true,
        password: true,
      }
    } 
  },
  methods: {
    userInfoValidate() {
      this.hasClicked = true;
      if(this.userInfo.email && this.userInfo.password) {
        if (!this.state.email && !this.state.password) {
        alert('successful connection!')
      }
      }
    },
    getEmailState (state) {
      console.log(state)
      this.state.email = state
    },
    getPasswordState (state) {
      console.log(state)
      this.state.password = state
    }
  }
}
</script>

