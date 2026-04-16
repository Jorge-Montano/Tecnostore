import { defineStore } from 'pinia'

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    items: []
  }),
  actions: {
    agregar(producto) {
      this.items.push(producto)
    }
  },
  getters: {
    total: (state) =>
      state.items.reduce((s, p) => s + p.price, 0)
  }
})