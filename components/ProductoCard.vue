<script setup>
defineProps(['producto'])
</script>

<template>
  <div>
    <img :src="producto.image" width="100" />

    <h3>{{ producto.title }}</h3>
    <p>${{ producto.price }}</p>

    <NuxtLink :to="`/producto/${producto.id}`">
      Ver producto
    </NuxtLink>
  </div>
</template>