<template>
    <!-- Produk Content -->
    <div class="sm:col-span-3 col-span-1 sm:overflow-scroll pr-4 ml-2 sm:ml-40 pb-20">
        <div class="flex flex-col sm:flex-row justify-between px-4 sm:px-10 py-4">
            <div>
                <div><span class="font-semibold">Welcome, Wesley Adrian</span></div>
                <div><span class="text-gray-400">22 Maret 2025</span></div>
            </div>

            <div class="mt-2 sm:mt-0 w-full sm:w-auto">
                <div class="relative max-w-xs w-full">
                    <input
                        id="search"
                        type="text"
                        placeholder="Search Products"
                        class="pl-3 pr-8 py-2 w-full text-xs rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" />
                    <label for="search" class="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none text-gray-500">
                        <IconsSearchIcon />
                    </label>
                </div>
            </div>
        </div>

        <!-- Grid Produk Responsif -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
            <!-- Contoh produk -->
            <div v-for="(product, i) in products" :key="i"
                class="border rounded-xl border-gray-300 bg-white p-3 shadow hover:shadow-lg transition-all duration-300">
                <div class="overflow-hidden rounded-xl bg-gray-100 mb-3 group">
                    <img :src="product.image" :alt="product.name"
                        class="w-full h-40 object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-105" />
                </div>
                <div class="pt-1">
                    <span class="text-xs text-gray-500">{{ product.type }}</span>
                    <h3 class="font-semibold text-gray-800 mt-1 text-sm truncate">
                        {{ product.name }}
                    </h3>
                </div>
                <hr class="border-gray-300 border-dashed my-2" />
                <div class="flex justify-between items-center gap-2">
                    <span class="text-sm font-bold text-gray-500">{{
                        formatCurrency(product.price)
                    }}</span>
                    <button @click="addToCart(product)"
						:class="[
							{
								'bg-green-500 text-white': useCart.items.some((cart: any) => cart?.name === product.name)
							},
							{
								'bg-white text-slate-700': !useCart.items.some((cart: any) => cart?.name === product.name)
							}
						]"
						:disabled="useCart.items.some((cart: any) => cart?.name === product.name)"
                        class="flex items-center gap-1 px-3 py-1.5 border border-slate-600 rounded-xl shadow-sm text-xs font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white hover:shadow-md active:scale-95 disabled:scale-95 disabled:bg-slate-200 disabled:border-slate-200 disabled:font-bold disabled:text-slate-600">
                        <IconsPlusIcon v-if="!useCart.items.some((cart: any) => cart?.name === product.name)" class="w-3 h-3" />
                        <IconsCheck v-if="useCart.items.some((cart: any) => cart?.name === product.name)" class="w-3 h-3" />
                        <span class="hidden sm:inline">{{ useCart.items.some((cart: any) => cart?.name === product.name) ? 'Ditambahkan' : 'Tambahkan' }}</span>
                        <span class="sm:hidden">Add</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { IconsSearchIcon } from '#components';
import { useCartStore } from '~/store/useCart';

const useCart = useCartStore();

const products = ref([
	{
		name: 'Iphone 14 64 GB',
		type: 'Mobiles',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-01.png',
		price: '20000'
	},
	{
		name: 'Macbook Pro',
		type: 'Computer',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-02.png',
		price: '20000'
	},
	{
		name: 'Rolex Tribute V3',
		type: 'Watches',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-03.png',
		price: '50000'
	},
	{
		name: 'Red Nike Angelo',
		type: 'Shoes',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-04.png',
		price: '3000',
	},
	{
		name: 'Airpod 2',
		type: 'Headphones',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-05.png',
		price: '4000',
	},
	{
		name: 'Blue White OGR',
		type: 'Shoes',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-06.png',
		price: '50000'
	},
	{
		name: 'IdeaPad Slim 5 Gen 7',
		type: 'Laptop',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-07.png',
		price: '64300'
	},
	{
		name: 'SWAGME',
		type: 'Headphones',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-08.png',
		price: '64300'
	},
	{
		name: 'Timex Black Silver',
		type: 'Watches',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-09.png',
		price: '64300'
	},
	{
		name: 'Tablet 1.02 inch',
		type: 'Computer',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-10.png',
		price: '64300'
	},
	{
		name: 'Fossil Pair Of 3 in 1',
		type: 'Watches',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-11.png',
		price: '64300'
	},
	{
		name: 'Green Nike Fe',
		type: 'Shoes',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-13.png',
		price: '64300'
	},
]);

const emits = defineEmits(['add-to-cart']);

const addToCart = (product: any) => {
	emits('add-to-cart', product);
};
</script>
