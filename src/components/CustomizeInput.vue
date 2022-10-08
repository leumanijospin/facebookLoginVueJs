<template>
   <input class="border border-solid border-[#dddfe2] rounded-md text-[17px] text-[#dddfe2] caret-blue-600 focus:outline outline-blue-600 h-[52px] font-[' Helvetica, Arial, sans-serif'] w-full px-3.5" :type="type" :placeholder="placeholder" required />
</template>

<script setup>
defineProps({
    type: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    }
})
</script>