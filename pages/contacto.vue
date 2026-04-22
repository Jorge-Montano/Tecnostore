<script setup>
import { ref } from 'vue'

const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  proyecto: ''
})

const loading = ref(false)

const enviar = async () => {
  loading.value = true

  try {
    await fetch(
      'https://script.google.com/macros/s/AKfycbyWwEAcdIkAHAgZkKR8E4PwghQWHh5gM5yQBE7CcSeeOirFh8Q5VNV1SGmUdFup5c9a/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(form.value)
      }
    )

    alert('Mensaje enviado 🚀')

    form.value = {
      nombre: '',
      correo: '',
      telefono: '',
      proyecto: ''
    }

  } catch (error) {
    alert('Error ❌')
  }

  loading.value = false
}
</script>

<template>
  <div class="contenido">
    <div class="container">
      <h1>Contáctame 📩</h1>

      <input v-model="form.nombre" placeholder="Nombre" />
      <input v-model="form.correo" placeholder="Correo" />
      <input v-model="form.telefono" placeholder="Teléfono" />
      <input v-model="form.proyecto" placeholder="Proyecto" />

      <button @click="enviar" :disabled="loading">
        {{ loading ? 'Enviando...' : 'Enviar' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.contenido {
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  padding-top: 100px;
}

.container {
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  background: rgba(0, 0, 0, 0.8);
  padding: 25px;
  border-radius: 15px;

  backdrop-filter: blur(10px);
}

h1 {
  color: white;
  text-align: center;
}

input {
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #1e293b;
  color: white;
}

button {
  padding: 12px;
  background: #00c896;
  color: white;
  border: none;
  border-radius: 8px;
}
</style>