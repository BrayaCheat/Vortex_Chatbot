<template>
  <div class="border-r md:flex hidden flex-col overflow-auto h-screen w-[300px]">
    <div class="border-b border-border">
      <div class="flex items-center justify-between p-3 text-md text-muted-foreground">
        <div class="flex items-center gap-1">
          <component :is="Bolt" class="size-5" />
          <h1>Customize </h1>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between h-screen overflow-auto gap-3">
      <div class="flex flex-col justify-between gap-6 p-3">
        <EnableSmartModel />
        <EnableNotification />
        <EnableClearConversation />
      </div>

      <div class="p-3 flex flex-col gap-3">
        <EnableDarkMode />
        <UserDisplayCard/>
      </div>
    </div>
  </div>
</template>

<script setup>
import EnableDarkMode from '@/components/EnableDarkMode.vue';
import EnableSmartModel from '@/components/EnableSmartModel.vue';
import EnableClearConversation from '@/components/EnableClearConversation.vue';
import EnableNotification from '@/components/EnableNotification.vue';
import UserDisplayCard from '@/components/UserDisplayCard.vue';
import { Bolt } from 'lucide-vue-next';
</script>