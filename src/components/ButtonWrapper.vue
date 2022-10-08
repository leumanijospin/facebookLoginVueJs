<template>
    <button type="submit " class="rounded-md font-bold font-[' Helvetica, Arial, sans-serif'] text-white text-center h-12 w-full border-none antialiased">{{buttonName}}</button>
</template>

<script setup>
defineProps({
   buttonName: {
       type: String,
       required: true
   }
})

</script>