<template>
  <nav class="flex items-center px-3 md:py-6 py-3 sticky top-0 inset-x-0 bg-inherit z-50">
    <div class="flex items-center gap-3">
      <Sheet>
        <SheetTrigger as-child>
          <component :is="PanelsTopLeft" class="text-muted-foreground size-5 cursor-pointer"/>
        </SheetTrigger>
        <SheetContent class="flex flex-col w-[250px]" side="left">
          <SheetTitle id="title">BRAYA-CHATBOT</SheetTitle>
          <SheetDescription class="flex-1 flex flex-col gap-3">
            <ThemeToggle/>
            <ClearChat v-if="isShowClearButton"/>
            <DonateMe/>
          </SheetDescription>
          <Logout/>
          <span class="text-[14px]">Develop by: <span class="text-green-500">#Braya Cheat#</span></span>
        </SheetContent>
      </Sheet>
    </div>
    <div class="text-center flex-1">
        <h1 class="font-semibold text-[18px]" id="title">BRAYA-CHATBOT</h1>
    </div>
    <div>
      <UserIcon/>
    </div>
  </nav>
</template>

<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue';
import ClearChat from '@/components/ClearChat.vue';
import DonateMe from '@/components/DonateMe.vue';
import Logout from '@/components/Logout.vue';
import UserIcon from '@/components/UserIcon.vue';
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
import { PanelsTopLeft } from 'lucide-vue-next';
import { useMemoryStore } from '@/store/memory';

const memoryStore = useMemoryStore()

const isShowClearButton = computed(() => memoryStore.memoryList.length)
</script>

<style scoped>
  #title {
    font-family: "JetBrains Mono", serif;
  }
</style>
