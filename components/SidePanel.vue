<template>
  <div class="border-r flex flex-col justify-between overflow-auto h-screen w-[300px]">
    <div class="flex flex-col gap-3">
      <h1 class="font-semibold text-xl py-3 pl-3 border-b">Vortex</h1>

      <div class="flex flex-col gap-6 mb-3 px-3">
        <span class="text-md font-semibold">Chat Setting</span>
        <EnableSmartModel />
        <EnableNotification />
        <EnableClearConversation />
      </div>

      <div class="flex flex-col gap-6 mb-3 px-3">
        <span class="text-md font-semibold mb-3">Appearance Setting</span>
        <EnableDarkMode />
      </div>
    </div>

    <UserDisplayCard />
  </div>
</template>

<script setup>
import EnableDarkMode from '@/components/EnableDarkMode.vue';
import EnableSmartModel from '@/components/EnableSmartModel.vue';
import EnableClearConversation from '@/components/EnableClearConversation.vue';
import EnableNotification from '@/components/EnableNotification.vue';
import UserDisplayCard from '@/components/UserDisplayCard.vue';

const onCloseSidePanel = (payload) => {
  if (!payload) return
  closeSidePanel()
}

const closeSidePanel = () => {
  const sidePanel = document.getElementById('close-side-panel')
  sidePanel?.click()
}
</script>