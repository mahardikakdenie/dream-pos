import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as any[],
    total: 0,
  }),

  actions: {
    // Tambahkan item ke keranjang
    addToCart(product: any) {
      this.items.push(product)
      this.calculateTotal()
    },

    // Hapus semua item dari keranjang
    clearCart() {
      this.items = []
      this.total = 0
    },

    // Hitung ulang total harga
    calculateTotal() {
      this.total = this.items.reduce((sum, item) => parseInt(sum) + parseInt(item.price), 0)
    },
  },

  getters: {
    cartItemCount: (state) => state.items.length,
  },
})
