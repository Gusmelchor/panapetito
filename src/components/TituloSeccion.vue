<script setup>
defineProps({
    titulo: String
})
</script>

<template>
    <h1>
        {{ titulo }}
    </h1>
</template>

<style scoped>

h1 {
    font-size: 2rem;
    padding-bottom: 1rem;
    text-transform: capitalize;
}
</style>