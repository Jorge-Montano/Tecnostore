<template>
  <div class="home">
    <h1>Bienvenido 🎬</h1>

    <NuxtLink to="/app-store" class="btn">
      Ver películas
    </NuxtLink>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  position: relative;
  z-index: 10;
}

h1 {
  color: white;
}

.btn {
  padding: 12px 20px;
  background: #00c896;
  color: white;
  border-radius: 8px;
  text-decoration: none;
}
</style>