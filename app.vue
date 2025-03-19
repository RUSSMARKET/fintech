<script setup lang="ts">
import "@/assets/css/main.css"
import 'primeicons/primeicons.css'
import NotificationsClass from '@/entities/notification'

onMounted(() => {
  NotificationsClass.init()
  NotificationsClass.send('success', 'title', 'text')
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage /> 
    <ClientOnly>
      <Toast position="bottom-right" />
    </ClientOnly>
  </NuxtLayout>
</template>