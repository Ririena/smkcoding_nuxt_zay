<script lang="ts" setup>
const props = defineProps({
product: {
type: Object,
default: {},
}
});
</script>

<template>
<section class="bg-white shadow-xl rounded-xl overflow-hidden ">
<div :class="`w-full h-[200px] p-5  bg-gradient-to-r from-cyan-500 to-blue-500 bg-gradient-to-l hover:bg-gradient-to-tr`">
<img :src="props.product.image" class="w-full h-full object-contain"/>
</div>
<div class="px-5 pb-5 pt-9 relative">

<NuxtLink :to="`/product/${props.product.id}`" ><h3 class="text-lg font-
bold mb-4 text-limit limit-2">{{ props.product.name }}</h3></NuxtLink>

<div class="flex justify-between items-center">
<span class="text-sm font-normal">{{ props.product.category }}</span>
<span class="text-sm font-normal">${{ props.product.price }}</span>
</div>

<div :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px] bg-
white shadow-xl rounded-full flex justify-center items-center hover:bg-blue-600

hover:text-white transition duration-300`">
<i class="ri-shopping-cart-2-line"></i>
</div>
</div>
</section>
</template> 
