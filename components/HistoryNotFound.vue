<template>
  <Card
      class="border-none shadow-none text-muted-foreground p-3 flex flex-col items-center m-3">
      <component :is="Inbox" />
      <p class="text-sm">No history found.</p>
    </Card>
</template>

<script setup>
  import { Card } from '@/components/ui/card';
  import { Inbox } from 'lucide-vue-next';
</script>