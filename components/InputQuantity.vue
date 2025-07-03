<template>
	<div
		class="flex items-center gap-1 bg-gray-100 rounded-full px-1 py-1 shadow-sm">
		<!-- Tombol Minus -->
		<button
            @click="quantity--"
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
			:value="quantity"
			class="w-8 h-7 text-center bg-transparent border-none text-sm font-medium text-gray-800 focus:outline-none focus:ring-0 flex items-center justify-center"
			readonly />

		<!-- Tombol Plus -->
		<button
            @click="quantity++"
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
</template>

<script lang="ts" setup>
const quantity = ref<number>(0);
</script>
