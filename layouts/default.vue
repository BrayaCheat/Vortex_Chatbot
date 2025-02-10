<template>
  <ClientOnly>
    <div class="flex flex-col h-screen overflow-hidden">
      <div class="flex flex-col md:w-[800px] w-full mx-auto p-3">
        <NavBar/>
        <NuxtPage/>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue';
</script>
