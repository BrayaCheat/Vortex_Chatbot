<template>
  <nav class="flex items-center justify-between">
    <div>
      <Button variant="ghost">
        <component :is="Brain"/>
        <h1>OHLALA</h1>
      </Button>
    </div>

    <div class="flex items-center gap-3">
      <Button class="text-muted-foreground" variant="ghost">
        <component :is="Settings"/>
      </Button>
    </div>

  </nav>
</template>

<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { Settings, Brain } from 'lucide-vue-next';
</script>