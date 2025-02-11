<template>
  <nav class="flex items-center justify-between px-3 py-6">
    <div>
        <h1 class="font-semibold text-[16px]">BRAYA-CHATBOT</h1>
    </div>

    <div class="flex items-center gap-3">
      <Sheet>
        <SheetTrigger as-child>
          <Button class="text-primary-foreground">
            <component :is="Menu"/>
          </Button>
        </SheetTrigger>
        <SheetContent class="flex flex-col">
          <SheetTitle>BRAYA-CHATBOT</SheetTitle>
          <SheetDescription class="flex-1 flex flex-col gap-3">
            <ThemeToggle/>
            <ClearChat/>
            <DonateMe/>
          </SheetDescription>
          <SignOut/>
        </SheetContent>
      </Sheet>
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
import { Menu, Brain } from 'lucide-vue-next';
</script>