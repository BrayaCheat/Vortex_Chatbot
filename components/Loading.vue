<template>
  <Card class="flex items-start flex-1 space-x-4 border-none my-10 shadow-none">
    <Avatar/>
    <div class="space-y-2">
      <Skeleton class="h-4 md:w-[740px] w-[300px] bg-secondary" />
      <Skeleton class="h-4 w-full bg-secondary" />
      <Skeleton class="h-4 w-full bg-secondary" />
    </div>
  </Card>
</template>

<script setup>
import { Skeleton } from '@/components/ui/skeleton'
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
</script>