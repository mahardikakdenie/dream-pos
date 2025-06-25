<template>
	<!-- Produk Content -->
	<div
		class="sm:col-span-3 col-span-1 sm:overflow-scroll pr-2 ml-2 sm:ml-40 sm:pb-20 pb-2">
		<div class="flex flex-col sm:flex-row justify-between px-10 py-2">
			<div>
				<div>
					<span class="font-semibold"> Welcome, Wesley Adrian </span>
				</div>
				<div>
					<span class="text-gray-400"> 22 Maret 2025 </span>
				</div>
			</div>
			<div>
				<div class="relative max-w-xs w-full">
					<input
						id="search"
						type="text"
						placeholder="Search Products"
						class="pl-9 py-2 w-full text-xs rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" />
					<label
						for="search"
						class="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none text-gray-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</label>
				</div>
			</div>
		</div>
		<div
			class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:overflow-scroll sm:h-[calc(100vh - 50px)] sm:ml-9 ml-0">
			<!-- Contoh produk -->
			<div
				v-for="(product, i) in products"
				:key="i"
				class="border rounded-xl border-gray-300 bg-white p-4 shadow hover:shadow-lg transition-all duration-300">
				<div class="overflow-hidden rounded-xl bg-gray-100 mb-3 group">
					<img
						:src="product.image"
						alt="Product"
						class="w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105" />
				</div>
				<div class="pt-1">
					<span class="text-xs text-gray-500">{{
						product.type
					}}</span>
					<h3 class="font-semibold text-gray-800 mt-1 text-sm">
						{{ product.name }}
					</h3>
				</div>
				<hr class="border-gray-300 border-dashed my-2" />
				<div class="flex justify-between items-center">
					<span class="text-sm font-bold text-gray-500">$15800</span>
					<div
						class="flex items-center gap-1 bg-gray-100 rounded-full px-1 py-1 shadow-sm">
						<!-- Tombol Minus -->
						<button
							class="w-7 h-7 cursor-pointer flex items-center justify-center bg-white rounded-full text-gray-600 hover:bg-green-100 hover:text-green-600 transition-all duration-200 focus:outline-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M20 12H4" />
							</svg>
						</button>

						<!-- Input Jumlah -->
						<input
							type="number"
							value="0"
							class="w-8 h-7 text-center bg-transparent border-none text-sm font-medium text-gray-800 focus:outline-none focus:ring-0 flex items-center justify-center"
							readonly />

						<!-- Tombol Plus -->
						<button
							class="w-7 h-7 flex cursor-pointer items-center justify-center bg-white rounded-full text-gray-600 hover:bg-green-100 hover:text-green-600 transition-all duration-200 focus:outline-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4v16m8-8H4" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
const products = ref([
	{
		name: 'Iphone 14 64 GB',
		type: 'Mobiles',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-01.png',
	},
	{
		name: 'Macbook Pro',
		type: 'Computer',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-02.png',
	},
	{
		name: 'Rolex Tribute V3',
		type: 'Watches',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-03.png',
	},
	{
		name: 'Red Nike Angelo',
		type: 'Shoes',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-04.png',
	},
	{
		name: 'Airpod 2',
		type: 'Headphones',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-05.png',
	},
	{
		name: 'Blue White OGR',
		type: 'Shoes',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-06.png',
	},
	{
		name: 'IdeaPad Slim 5 Gen 7',
		type: 'Laptop',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-07.png',
	},
	{
		name: 'SWAGME',
		type: 'Headphones',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-08.png',
	},
	{
		name: 'Timex Black Silver',
		type: 'Watches',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-09.png',
	},
	{
		name: 'Tablet 1.02 inch',
		type: 'Computer',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-10.png',
	},
	{
		name: 'Fossil Pair Of 3 in 1',
		type: 'Watches',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-11.png',
	},
	{
		name: 'Green Nike Fe',
		type: 'Shoes',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-13.png',
	},
]);
</script>
