<template>
  <Card class="flex items-center flex-1 space-x-4 border-none my-10">
    <div class="space-y-2">
      <Skeleton class="h-4 w-[900px] bg-secondary" />
      <Skeleton class="h-4 w-full bg-secondary" />
      <Skeleton class="h-4 w-full bg-secondary" />
    </div>
  </Card>
</template>

<script setup>
import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card';
</script>