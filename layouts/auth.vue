<template>
  <ClientOnly>
    <div class="relative h-screen">
      <NuxtPage/>
      <Toaster/>
    </div>
  </ClientOnly>
</template>

<script setup>
  import { Toaster } from '@/components/ui/toast';
</script>

