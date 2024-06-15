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

@media (max-with:768px) {
    h1 {
        text-align: center;
        font-size: 2.5rem;
        color: #f68712;
    }
}
</style>