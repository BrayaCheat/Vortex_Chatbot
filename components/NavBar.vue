<template>
  <nav class="flex items-center px-3 md:py-6 py-3 fixed top-0 inset-x-0 border-b bg-primary-foreground z-50">
    <div class="flex items-center gap-3 absolute">
      <Sheet>
        <SheetTrigger as-child>
          <component :is="AlignJustify" class="text-muted-foreground size-5"/>
        </SheetTrigger>
        <SheetContent class="flex flex-col" side="left">
          <SheetTitle id="title">BRAYA-CHATBOT</SheetTitle>
          <SheetDescription class="flex-1 flex flex-col gap-3">
            <ThemeToggle/>
            <ClearChat/>
            <DonateMe/>
          </SheetDescription>
          <!-- <SignOut/> -->
        </SheetContent>
      </Sheet>
    </div>
    <div class="flex-1 text-center">
        <h1 class="font-semibold text-[18px]" id="title">BRAYA-CHATBOT</h1>
    </div>
  </nav>
</template>

<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue';
import ClearChat from '@/components/ClearChat.vue';
import DonateMe from '@/components/DonateMe.vue';
import SignOut from '@/components/SignOut.vue';
import { Button } from '@/components/ui/button';
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
import { AlignJustify } from 'lucide-vue-next';
</script>

<style scoped>
  #title{
    font-family: 'JetBrains Mono', serif;
  }
</style>