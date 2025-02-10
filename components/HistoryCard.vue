<template>
  <div class="flex flex-col gap-3">
    <div v-if="historyStore.history.length">
      <span class="text-muted-foreground">Recent chat</span>
      <Card v-for="item, index in historyStore.history" :key="index">
        <Button>{{ item }}</Button>
      </Card>
    </div>
    <div v-else>
      No history
    </div>
  </div>
</template>

<script setup>
import { useHistoryStore } from '@/store/history';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const historyStore = useHistoryStore()


</script>