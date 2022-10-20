<template>
 <div>
    <input :class="['border border-solid rounded-md text-[17px] text-[#1d2129] h-[52px] font-[Helvetica] w-full px-3.5',  show && errorMessage ? 'focus:outline-none border-red-500' : 'focus:outline outline-[#1877f2] border-[#dddfe2] caret-blue-600']"
   type="password" :placeholder="placeholder" :value="modelValue"
    @input="sendError" 
    required/>
    <span class="text-red-500 text-xs" v-if="show"> {{ errorMessage }}</span>
 </div>
</template>

<script>
export default {
  name: 'PasswordInput',
  props: {
    modelValue: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    show: {
      type: Boolean,
      required: true,
    }
  },
  emits: ['update:modelValue', 'checkPassword'], 
  data(){
      return {
        errorMessage: ''
      }
  },
  methods: {
    sendError(e) {
      if (e.target.value.length === 0) {
        this.errorMessage = 'password required!'
        this.$emit("update:modelValue", e.target.value)
        this.$emit("checkPassword", true)
      }
      else if (e.target.value !== 'bonjour'){
        this.errorMessage = 'invalid password'
        this.$emit("update:modelValue", e.target.value)
        this.$emit("checkPassword", true)
      }
      else{
        this.errorMessage = ''
        this.$emit("update:modelValue",e.target.value)
        this.$emit("checkPassword", false)
      }  
    }
  }
}
</script>