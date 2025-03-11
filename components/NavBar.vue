<template>
  <nav class="flex items-center px-3 border-b border-border bg-primary-foreground">
    <div class="flex-1">
      <div class="flex items-center justify-between p-3 text-md text-muted-foreground">
        <div class="flex items-center gap-1">
          <h1 class="uppercase">Vortex - ChatBot</h1>
        </div>
      </div>
    </div>

    <Dialog>
      <DialogTrigger>
        <component :is="CircleHelp" class="size-5 text-muted-foreground"/>
      </DialogTrigger>
      <DialogContent>
        <h1>Develop by: Braya Cheat</h1>
      </DialogContent>
    </Dialog>
  </nav>
</template>

<script setup>
import ClearChat from '@/components/ClearChat.vue';
import Report from '@/components/Report.vue';
import UserDisplayCard from '@/components/UserDisplayCard.vue';
import { CircleHelp } from 'lucide-vue-next';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
</script>
