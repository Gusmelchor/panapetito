<script setup>
import { useRoute } from "vue-router"
import Productos from "@/components/Productos.vue"

const ruta = useRoute()
const categoria = ruta.params.categoria;

</script>

<template>
    <Productos :categoria="categoria " />
</template>