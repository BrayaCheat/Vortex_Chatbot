<template>
  <Card class="rounded-[10px] border-destructive p-3 bg-primary-foreground flex flex-col gap-3">
    <span class="text-[14px] text-muted-foreground">There was a server error.</span>
    <Button variant="destructive" class="border-rounded-[10px]" @click="onRetryClick">Retry</Button>
  </Card>
</template>

<script setup>
  import { Card } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';
  import { useMemoryStore } from '~/store/memory';

  //state
  const emits = defineEmits(['onRetry'])
  const memoryStore = useMemoryStore()
  const message = computed(() => memoryStore?.memoryList?.[memoryStore?.memoryList?.length - 1] || 'There was a technical issue.')

  //function
  const onRetryClick = () => {
    emits('onRetry', message.value)
  }
</script>