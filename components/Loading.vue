<template>
  <Card class="flex items-start justify-start flex-1 gap-3 border-none shadow-none text-[14px] text-muted-foreground animate-pulse ml-3">
    <component :is="Loader2" class="animate-spin"/>
  </Card>
</template>

<script setup>
import { Loader2 } from 'lucide-vue-next';
import { Card } from '@/components/ui/card';
</script>
