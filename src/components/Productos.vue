<template>
    <div class="contenedor">
     <Titulo :titulo="props.categuria" />
     <div class="productos">
        <div class="producto">
            <img class="foto" :src="`/imagenes/${producto.imagen}`" alt="Producto">
            <div class="informacion">
                <h3 class="titulo">
                    {{ pruducto.nombre }}
                </h3>
                <p class="descripcion">
                    {{ producto.descripcion }}
                </p>
                <p class="precio">
                    $ {{ producto.precio }}
                </p>
            </div>
        </div>
     </div>
    </div>
</template>

<script setup>
import titulo from "@/components/TituloSeccion.vue"
import listaProductos from "@/panaderia.json"
import {defineProps} from "vue"

const props = defineProps({
    categoria: String
})
const productos = ref([])
</script>