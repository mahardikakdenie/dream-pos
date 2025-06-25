<template>
	<div class="">
		<div
			class="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 overflow-scroll h-[calc(100vh-80px)] relative">
			<CategoryList />
			<ProductContent />
			<OrdersCart />
		</div>
	</div>
</template>

<script lang="ts" setup>
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
