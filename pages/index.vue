<template>
	<div class="">
		<div class="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 overflow-scroll  h-[calc(100vh-80px)] relative">
			<div class="sm:fixed top-20 sm:inline">
				<div
					class="w-full bg-white border-r flex sm:inline-block border-gray-200 rounded-lg p-4 shadow-sm h-full overflow-y-auto no-scrollbar">
					<ul class="space-y-3 flex sm:inline-block gap-3">
						<li v-for="category in categories" :key="category.id">
							<div
								class="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
								<div class="p-3 flex flex-col items-center">
									<img
										:src="category.image"
										alt=""
										class="w-16 h-8 object-contain mb-1 rounded group-hover:scale-105 transition-transform duration-300" />
									<span
										class="text-xs text-center font-medium text-gray-700 group-hover:text-blue-600 transition-colors text-ellipsis whitespace-nowrap">
										{{ category.name }}
									</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- Produk Content -->
			<div class="sm:col-span-3 col-span-1 sm:overflow-scroll pr-2 ml-2 sm:ml-36 pb-16">
				<div
					class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:overflow-scroll h-full sm:h-[calc(100vh - 50px)]">
					<!-- Contoh produk -->
					<div
						v-for="product in 9"
						:key="product"
						class="border rounded-xl border-gray-300 bg-white p-4 shadow hover:shadow-lg transition-all duration-300">
						<div
							class="overflow-hidden rounded-xl bg-gray-100 mb-3 group">
							<img
								src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-01.png"
								alt="Product"
								class="w-full h-auto object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105" />
						</div>
						<div class="pt-1">
							<span class="text-xs text-gray-500">Mobile</span>
							<h3
								class="font-semibold text-gray-800 mt-1 text-sm">
								IPhone 14 64GB
							</h3>
						</div>
						<hr class="border-gray-300 border-dashed my-2" />
						<div class="flex justify-between items-center">
							<span class="text-sm font-bold text-gray-500"
								>$15800</span
							>
							<div class="flex items-center gap-1">
								<button
									class="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-green-100 rounded-full text-gray-700 hover:text-green-700 transition">
									-
								</button>
								<input
									type="number"
									value="0"
									class="w-10 text-center border border-gray-300 rounded text-sm focus:ring-green-500"
									readonly />
								<button
									class="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-green-100 rounded-full text-gray-700 hover:text-green-700 transition">
									+
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-span-1">
				<div
					class="bg-white shadow rounded-lg p-5 flex flex-col mb-24 sm:mb-0">
					<h3 class="font-semibold text-gray-800">Order List</h3>
					<hr class="my-4 border-gray-300" />

					<div class="mb-4">
						<label
							for="customer"
							class="block text-xs font-semibold text-gray-600 mb-1">
							Customer Information
						</label>
						<input
							id="customer"
							type="text"
							placeholder="Enter customer name"
							class="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
					</div>

					<div
						class="flex-grow overflow-y-auto space-y-3 pr-2 no-scrollbar">
						<div
							v-for="n in 3"
							:key="n"
							class="flex justify-between text-sm text-gray-700 pb-2 border-b border-gray-200">
							<span>IPhone 14 x1</span>
							<span>$15800</span>
						</div>
					</div>

					<div
						class="mt-4 pt-4 border-t border-gray-200 font-semibold text-gray-800">
						Total: $47400
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const categories = [
	{
		id: 1,
		name: 'Mobile',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-01.png',
	},
	{
		id: 2,
		name: 'Laptop',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-02.png',
	},
	{
		id: 3,
		name: 'Watch',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-03.png',
	},
	{
		id: 4,
		name: 'Shoes',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-04.png',
	},
	{
		id: 5,
		name: 'Earphone',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-05.png',
	},
	{
		id: 6,
		name: 'Casual Shoes',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-06.png',
	},
	{
		id: 7,
		name: 'Gaming Laptop',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-07.png',
	},
	{
		id: 8,
		name: 'Headset',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-08.png',
	},
];
</script>

<style scoped>
.no-scrollbar {
	scrollbar-width: none;
	-ms-overflow-style: none;
}

.no-scrollbar::-webkit-scrollbar {
	display: none;
}
</style>
