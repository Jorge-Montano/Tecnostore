<script setup>
import { ref, onMounted } from 'vue'

const { getProductos } = useApi()
const productos = ref([])

onMounted(async () => {
  productos.value = await getProductos()
})
</script>

<template>
  <div>
    <h1>💻 TechStore</h1>

    <div v-if="productos.length === 0">
      Cargando productos...
    </div>

    <ProductoCard
      v-for="p in productos"
      :key="p.id"
      :producto="p"
    />
  </div>
</template>