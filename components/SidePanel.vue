<template>
  <Sheet>
    <SheetTrigger as-child>
      <component :is="Menu" class="text-muted-foreground size-[30px] cursor-pointer p-1" />
    </SheetTrigger>
    <SheetContent class="flex flex-col w-[75%] p-0" side="left">
      <SheetHeader class="hidden" />
      <SheetTitle class="hidden" />
      <span
        class="border-b px-3 md:h-[95.5px] h-[71.5px] md:shadow-none shadow text-center flex flex-col justify-center items-start">
        <h1 class="font-semibold text-[18px]">MAIN MENU</h1>
      </span>
      <SheetDescription class="flex-1 flex flex-col gap-3 px-3">

        <span class="text-[16px] font-semibold mb-3 text-primary">Chat Setting</span>
        <div class="flex flex-col gap-6 mb-3">
          <EnableSmartModel />
          <EnableNotification/>
          <EnableClearConversation />
        </div>

        <span class="text-[16px] font-semibold mb-3 text-primary">Appearance Setting</span>
        <div class="flex flex-col gap-6 mb-3">
          <EnableDarkMode />
        </div>

      </SheetDescription>
      <SheetClose id="close-side-panel" />
      <div class="px-3 pb-6">
        <UserDisplayCard/>
      </div>
    </SheetContent>
  </Sheet>
</template>

<script setup>
import EnableDarkMode from '@/components/EnableDarkMode.vue';
import EnableSmartModel from '@/components/EnableSmartModel.vue';
import EnableClearConversation from '@/components/EnableClearConversation.vue';
import EnableNotification from '@/components/EnableNotification.vue';
import UserDisplayCard from '@/components/UserDisplayCard.vue';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-vue-next';

const onCloseSidePanel = (payload) => {
  if (!payload) return
  closeSidePanel()
}

const closeSidePanel = () => {
  const sidePanel = document.getElementById('close-side-panel')
  sidePanel?.click()
}
</script>