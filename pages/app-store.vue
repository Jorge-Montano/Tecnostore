<script setup>
import { ref, onMounted } from 'vue'

const peliculas = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://api.tvmaze.com/shows')
    const data = await res.json()

    peliculas.value = data.slice(0, 12).map(item => ({
      nombre: item.name,
      imagen: item.image?.medium,
      genero: item.genres.join(', ')
    }))

  } catch (error) {
    console.error(error)
  }

  loading.value = false
})
</script>

<template>
  <div class="contenido">
    <div class="container">
      <h1>🎬 Películas</h1>

      <p v-if="loading">Cargando...</p>

      <div class="grid">
        <div v-for="(p, i) in peliculas" :key="i" class="card">

          <img :src="p.imagen" />

          <h2>{{ p.nombre }}</h2>
          <p>{{ p.genero }}</p>

          <button>Ver ahora</button>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contenido {
  position: relative;
  z-index: 10;
  padding-top: 100px;
}

.container {
  max-width: 1200px;
  margin: auto;
}

h1 {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.card {
  background: #111;
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

.card img {
  width: 100%;
  border-radius: 10px;
}

button {
  margin-top: 10px;
  padding: 8px;
  background: #00c896;
  border: none;
  border-radius: 6px;
  color: white;
}
</style>