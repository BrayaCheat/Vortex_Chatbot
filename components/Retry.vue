<template>
  <Card class="rounded-[10px] border-destructive p-3 bg-primary-foreground flex flex-col gap-3">
    <span class="text-[14px] text-muted-foreground">There was a server error.</span>
    <Button variant="destructive" class="border-rounded-[10px]" @click="onRetry">Retry</Button>
  </Card>
</template>

<script setup>
  import { Card } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';

  //state
  const emits = defineEmits(['onRetry'])
  const props = defineProps({
    data: {
      type: String,
      required: true
    }
  })
  const message = computed(() => props?.data?.prompt || 'There was a server error.')

  //function
  const onRetry = () => {
    emits('onRetry', message.value)
  }
</script>