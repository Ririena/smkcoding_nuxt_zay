<template>
  <div>
    
  </div>
  <span class="container">User ID: {{ $route.params.id }}</span>
  <span>Route.name: {{ $route.name }}</span>
</template>

<script setup>
const route = useRoute()
const routeName = route.name;


console.log(route.params) // { id: '123' }
</script>
