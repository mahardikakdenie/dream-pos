<template>
  <div class="space-y-4">
    <!-- Jika tidak ada item -->
    <div v-if="carts.length === 0" class="text-center py-6 text-gray-500">
      Keranjang kosong. Silakan tambahkan produk.
    </div>

    <!-- Daftar Item -->
    <div
      v-for="(item, i) in carts"
      :key="i"
      class="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition duration-150 ease-in-out p-2 rounded-lg"
    >
      <!-- Produk Info -->
      <div class="flex items-center space-x-4">
        <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover rounded-md shadow-sm" />
        <div>
          <h4 class="text-sm font-medium text-gray-800">{{ item.name }}</h4>
          <p class="text-xs text-gray-500">Harga: {{ formatCurrency(item.price) }}</p>

          <!-- Quantity Input -->
          <div class="mt-2">
            <input-quantity v-model="item.quantity" @update="handleUpdateQuantity(item)" />
          </div>
        </div>
      </div>

      <!-- Harga Total & Tombol Hapus -->
      <div class="flex items-center mt-3 sm:mt-0">
        <span class="font-semibold text-gray-700 mr-6">{{ formatCurrency(item.price) }}</span>
        <button
          class="flex items-center justify-center w-8 h-8 text-red-500 bg-red-100 rounded-full hover:bg-red-200 focus:outline-none transition"
          title="Hapus item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/store/useCart'

const useCart = useCartStore();

const carts = computed(() => useCart.items);
// Fungsi update quantity
function handleUpdateQuantity(item: any) {
  // Update cart total jika ada logic di dalam store
  useCart.calculateTotal()
}
</script>
