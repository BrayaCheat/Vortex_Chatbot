<template>
  <Card class="flex items-start justify-start flex-1 gap-3 border-none shadow-none text-[14px] text-muted-foreground animate-pulse ml-4 mb-3 md:mx-[250px]">
    <component :is="Loader2" class="animate-spin size-7"/>
  </Card>
</template>

<script setup>
import { Loader2 } from 'lucide-vue-next';
import { Card } from '@/components/ui/card';
</script>
