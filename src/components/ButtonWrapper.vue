<template>
    <button type="submit" class="rounded-md font-bold font-[Helvetica] text-white text-center h-12 w-full border-none antialiased">{{name}}</button>
</template>

<script>
export default {
    name: 'ButtonWrapper',
    props: {
        name: {
            type: String,
            required: true
        }
    }
}

</script>