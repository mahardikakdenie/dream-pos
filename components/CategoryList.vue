<template>
	<div class="sm:fixed top-20 sm:inline">
		<div
			class="w-full bg-white border-r flex sm:inline-block border-gray-200 rounded-lg p-4 shadow-sm overflow-y-auto sm:h-[650px] no-scrollbar">
			<ul class="space-y-3 flex sm:inline-block gap-3 overflow-y-scroll">
				<li
					v-for="(category, i) in categories"
					:key="i"
					@click="selectedCategory = category.name">
					<div
						class="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all px-4 duration-300 cursor-pointer group"
						:class="[
							{
								'border-green-400 ':
									selectedCategory === category.name,
							},
							{
								'border-gray-200':
									selectedCategory !== category.name,
							},
						]">
						<div class="p-3 flex flex-col items-center">
							<img
								:src="category.image"
								alt=""
								class="w-16 h-8 object-contain mb-1 rounded group-hover:scale-105 transition-transform duration-300" />
							<span
								class="text-xs text-center font-medium group-hover:text-blue-600 transition-colors text-ellipsis whitespace-nowrap"
								:class="[
									{
										'text-green-700 ':
											selectedCategory === category.name,
									},
									{
										'text-gray-700':
											selectedCategory !== category.name,
									},
								]">
								{{ category.name }}
							</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
const selectedCategory = ref<string>('All');
const categories = [
	{
		id: 1,
		name: 'All',
		image: 'https://cdn-icons-png.freepik.com/512/4813/4813075.png',
	},
	{
		id: 1,
		name: 'Mobile',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-01.png',
	},
	{
		id: 2,
		name: 'Headset',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-08.png',
	},
	{
		id: 4,
		name: 'Shoes',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-15.png',
	},
	{
		id: 5,
		name: 'Watches',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-03.png',
	},
	{
		id: 6,
		name: 'Laptop',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-12.png',
	},
	{
		id: 7,
		name: 'Appliance',
		image: 'https://dreamspos.dreamstechnologies.com/html/template/assets/img/products/pos-product-05.png',
	},
];
</script>
