<template>
  <ClientOnly>
    <div class="flex flex-col h-screen overflow-hidden">
      <div class="flex flex-1">
        <SidePanel/>
        <div class="p-6 flex-1">
          <NavBar />
          <div class="md:w-[700px] mx-auto flex flex-col flex-1">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import SidePanel from '@/components/SidePanel.vue';
</script>
