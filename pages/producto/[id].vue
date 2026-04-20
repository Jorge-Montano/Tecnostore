<script setup>
import { ref, onMounted } from 'vue'

const route = useRoute()
const producto = ref(null)
const carrito = useCarritoStore()

onMounted(async () => {
  const data = await $fetch(
    `https://fakestoreapi.com/products/${route.params.id}`
  )
  producto.value = data
})
</script>

<template>
  <div v-if="producto">
    <h1>{{ producto.title }}</h1>
    <img :src="producto.image" width="200" />
    <p>{{ producto.description }}</p>
    <h2>${{ producto.price }}</h2>

    <button @click="carrito.agregar(producto)">
      Agregar al carrito
    </button>
  </div>
</template>