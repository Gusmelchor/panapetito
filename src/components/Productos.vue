<template>
    <div class="contenedor">
     <Titulo :titulo="props.categoria" />
     <div class="productos">
        <div class="producto" v-for="producto in productos" :key="producto.id">
            <img class="foto" :src="`/imagenes/${producto.imagen}`" alt="Producto">
            <div class="informacion">
                <h3 class="titulo">
                    {{ producto.producto }}
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
import { ref, defineProps, watchEffect } from "vue";
import Titulo from "@/components/TituloSeccion.vue";
import listaProductos from "@/panaderia.json";

const props = defineProps({
    categoria: String,
});

const productos = ref([]);

watchEffect(() => {
    productos.value = listaProductos.filter( (producto) => producto.categoria === props.categoria );
});
</script>

<style scoped>
.contenedor {
    padding: 3rem;
    margin-bottom: 2rem;
}
.productos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

}
.producto{
    display: flex;
    align-items: center;
}
.iformacion{
    padding: 15px;
}
.titulo{
    font-size: 1.25rem;
}
.descripcion{
    color: gray;
    word-wrap: break-word;
}
.foto{
    max-width: calc(100% / 4);
    border-radius: 20px;
    box-shadow: 0px 2px rgb(76, 76, 76);
}
.precio{
    color: #f9a72b;
    font-weight: bold;
    font-size: 1.25rem;
}
@media (max-width: 1024px) and (min-width: 768px) {
    .productos {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 768px) {
    .productos {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>