<template>
	<div class="col-span-1">
		<div
			class="bg-white shadow rounded-lg p-5 flex flex-col mb-24 mt-2 sm:mt-0 sm:mb-0">
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

			<div class="flex-grow overflow-y-auto space-y-3 pr-2 no-scrollbar">
				<div
					v-for="n in 3"
					:key="n"
					class="flex justify-between text-sm text-gray-700 pb-2 ">
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
</template>
<script lang="ts" setup></script>
