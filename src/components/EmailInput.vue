<template>
<div class="flex flex-col">
    <input 
      :class="['border border-solid rounded-md text-[17px] text-[#1d2129] h-[52px] font-[Helvetica] w-full px-3.5', show && errorMessage ? 'focus:outline-none border-red-500 caret-black' : 'focus:outline outline-[#1877f2] border-[#dddfe2] caret-blue-600']"
      type="email" :placeholder="placeholder" :value="modelValue"
      @input="sendError" 
      required/>
    <span class="text-red-500 text-xs" v-if="show">{{ errorMessage }}</span>
</div>
</template>

<script>
export default {
  name: 'EmailInput',
  props: {
    modelValue:{
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
  emits: ['update:modelValue', 'checkEmail'],
  data() {
    return {
      errorMessage: ''
    }
  },
  methods: {
    sendError(e) {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

        if (e.target.value.length === 0){
          this.errorMessage = 'email required!'
          this.$emit("update:modelValue",e.target.value)
          this.$emit("checkEmail", true);
        } 
        else if (!this.modelValue.match(pattern)) {
          this.errorMessage = 'email invalid'  
          this.$emit("update:modelValue",e.target.value)
          this.$emit("checkEmail", true);
        } 
        else{
          this.errorMessage = ''
          this.$emit("update:modelValue",e.target.value)
          this.$emit("checkEmail", false);
        }
        
    }
   
  },
}
</script>