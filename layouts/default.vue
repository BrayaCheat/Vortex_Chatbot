<!-- <template>
  <ClientOnly>
    <div class="flex flex-col h-screen overflow-hidden">
      <div class="flex flex-1">
        <SidePanel/>
        <div class="p-3 flex-1 flex flex-col">
          <NavBar />
          <div class="md:w-[900px] mx-auto flex flex-col flex-1">
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
</script> -->

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
