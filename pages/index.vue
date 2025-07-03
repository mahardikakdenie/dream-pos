<template>
	<div class="">
		<div
			class="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 overflow-scroll h-[calc(100vh-80px)] relative">
			<CategoryList />
			<ProductContent @add-to-cart="addToCart" />
			<OrdersCart />
		</div>
	</div>
</template>

<script lang="ts" setup>
const carts = ref<any[]>([
]);
const addToCart = (product: any) => {
	carts.value.push(product);
};
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
