<template>
  <div class="border-r flex flex-col overflow-auto h-screen w-[300px]">
    <h1 class="font-semibold text-xl py-3 pl-3 border-b">Vortex</h1>
    <div class="flex flex-col justify-between h-screen overflow-auto gap-3">
      <div class="flex flex-col justify-between gap-6 p-3">
        <EnableSmartModel />
        <EnableNotification />
        <!-- <EnableClearConversation /> -->
      </div>

      <div class="p-3">
        <EnableDarkMode />
      </div>
    </div>
  </div>
</template>

<script setup>
import EnableDarkMode from '@/components/EnableDarkMode.vue';
import EnableSmartModel from '@/components/EnableSmartModel.vue';
// import EnableClearConversation from '@/components/EnableClearConversation.vue';
import EnableNotification from '@/components/EnableNotification.vue';
</script>