<template>
  <nav class="flex items-center justify-between px-3 py-6">
    <div>
        <h1 class="font-semibold text-[16px]">Braya - CHATBOT</h1>
    </div>

    <div class="flex items-center gap-3">
      <component :is="Settings" class="cursor-pointer size-6 text-muted-foreground"/>
    </div>

  </nav>
</template>

<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Settings, Brain } from 'lucide-vue-next';
</script>