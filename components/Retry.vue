<template>
  <Card class="rounded-[10px] border-destructive p-3 bg-red-100 flex flex-col gap-3">
    <span class="text-[14px] text-primary font-medium">{{ errorMessage }}</span>
    <Button
      variant="destructive"
      @click="onRetryClick">
        Retry
    </Button>
  </Card>
</template>

<script setup>
  import { Card } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';
  import { useMemoryStore } from '~/store/memory';

  //state
  const emits = defineEmits(['onRetry'])
  const memoryStore = useMemoryStore()
  const message = computed(() => memoryStore?.memoryList?.[memoryStore?.memoryList?.length - 1]?.prompt || 'There was a technical issue.')
  const props = defineProps({
    errorMessage: {
      type: String,
      required: true
    }
  })
  const errorMessage = computed(() => props.errorMessage || 'Server error.')
  //function
  const onRetryClick = () => {
    memoryStore.isError = false
    emits('onRetry', message.value)
  }
</script>