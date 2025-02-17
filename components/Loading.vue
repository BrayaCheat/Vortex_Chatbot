<template>
  <!-- <Card class="flex items-start flex-1 gap-3 border-none my-10 shadow-none">
    <Avatar class="animate-pulse"/>
    <div class="space-y-2">
      <Skeleton class="h-4 md:w-[375px] w-[300px] bg-secondary" />
      <Skeleton class="h-4 w-full bg-secondary" />
      <Skeleton class="h-4 w-full bg-secondary" />
    </div>
  </Card> -->
  <Card class="flex items-start justify-start flex-1 gap-3 border-none shadow-none text-[14px] text-muted-foreground animate-pulse">
    <component :is="Loader2" class="animate-spin"/>
    <span class="mt-1">Just a moment...</span>
  </Card>
</template>

<script setup>
import { Skeleton } from '@/components/ui/skeleton'
import { Loader2 } from 'lucide-vue-next';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
</script>
