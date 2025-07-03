<template>
	<div class="col-span-1">
		<div class="bg-white shadow-lg rounded-xl p-5 flex flex-col transition-all duration-300">
			<!-- Header -->
			<h3 class="font-bold text-gray-800 text-lg">Order List</h3>
			<hr class="my-4 border-gray-200" />
			<!-- Customer Input -->
			<div class="mb-5">
				<label for="customer" class="block text-xs font-medium text-gray-600 mb-2">
					Customer Name
				</label>
				<input id="customer" type="text" placeholder="Enter customer name"
					class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition" />
			</div>
			<!-- Promo / Discount Section -->
			<div class="mb-5 space-y-3">
				<p class="text-xs font-semibold text-gray-600">
					Apply Promo Code
				</p>
				<div v-for="i in 3" :key="i"
					class="border border-green-200 bg-green-50 rounded-lg px-3 py-2 flex justify-between items-center hover:bg-green-100 transition">
					<span class="text-xs font-medium text-green-700">Discount 20%</span>
					<button
						class="text-xs font-semibold text-white bg-green-600 hover:bg-green-500 px-3 py-1 rounded-md transition">
						Apply
					</button>
				</div>
			</div>
			<!-- Order Items -->
			<div class="max-h-80 overflow-y-auto pr-2">
				<div class="flex justify-between items-center mb-3">
					<span class="font-semibold text-sm text-gray-700">
						Order Details:
						<span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
							{{ carts.length }} Items
						</span>
					</span>
					<button class="text-xs text-red-500 hover:text-red-700 font-medium cursor-pointer" @click="removeAll">
						Clear All
					</button>
				</div>
				<!-- Item List -->
				<CartList />
			</div>
			<!-- Total -->
			<div class="border-t border-gray-200 py-2">
				<div class="flex justify-between items-center">
					<span class="text-base font-semibold text-gray-700">Total</span>
					<span class="text-lg font-bold text-gray-900">{{ formatCurrency(useCart.total) }}</span>
				</div>
				<!-- Checkout Button -->
				<button
					class="mt-4 w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition transform hover:scale-[1.01] active:scale-95">
					Checkout
				</button>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { useCartStore } from '~/store/useCart';

const useCart = useCartStore();


const carts = computed(() => useCart.items);

const removeAll = () => {
	useCart.items = [];
}
</script>
