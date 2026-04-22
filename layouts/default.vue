<template>
  <div>
    <!-- 🔥 FONDO MATRIX -->
    <div class="jp-matrix">
      <span v-for="n in 400" :key="n">
        {{ Math.random() > 0.5 ? '1' : '0' }}
      </span>
    </div>

    <!-- 🔥 MENÚ -->
    <nav class="menu">
      <NuxtLink to="/">Inicio</NuxtLink>
      <NuxtLink to="/app-store">Películas</NuxtLink>
      <NuxtLink to="/contacto">Contacto</NuxtLink>
    </nav>

    <!-- 🔥 CONTENIDO -->
    <NuxtPage />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* 🔥 MATRIX */
.jp-matrix {
  position: fixed;
  inset: 0;
  z-index: 0;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  grid-auto-rows: 40px;

  font-size: 28px;
  color: rgba(0, 255, 200, 0.6);
  font-family: monospace;

  overflow: hidden;
  background: #05050a;
}

/* 🔥 MENÚ */
.menu {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);

  padding: 15px;

  display: flex;
  justify-content: center;
  gap: 30px;
}

.menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.menu a:hover {
  color: #00b894;
}
</style>