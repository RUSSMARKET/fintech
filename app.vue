<script setup lang="ts">
import "@/assets/css/main.css"
import 'primeicons/primeicons.css'
</script>

<template>
  <NuxtLayout>
    <NuxtPage /> 
    <ClientOnly>
      <Toast position="bottom-right" />
    </ClientOnly>
  </NuxtLayout>
</template>