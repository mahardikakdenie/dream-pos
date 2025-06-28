<template>
    <div>
        <!-- Item List -->
        <div v-for="item in cartItems" :key="item.id"
            class="flex flex-wrap items-center justify-between py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition duration-150 ease-in-out">

            <!-- Product Info -->
            <div class="flex items-center space-x-4">
                <img :src="item.image" alt="Product Image" class="w-12 h-12 object-cover rounded-md shadow-sm">
                <div>
                    <h4 class="text-sm font-medium text-gray-800">{{ item.name }}</h4>
                    <p class="text-xs text-gray-500">{{ item.price }}</p>
                </div>
            </div>

            <!-- Remove Button -->
            <div>
                <button
                    class="flex cursor-pointer items-center justify-center w-8 h-8 text-red-500 bg-red-100 rounded-full hover:bg-red-200 focus:outline-none transition">
                    <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png " alt="Remove" class="w-4 h-4">
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const cartItems = [
    { id: 1, name: 'iPhone 14 x1', price: '$15,800', image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-01.png' },
    { id: 2, name: 'MacBook Pro x1', price: '$24,999', image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-01.png' },
    { id: 3, name: 'Apple Watch x1', price: '$799', image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-01.png' }
];
</script>
