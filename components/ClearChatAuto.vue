<template>
  <Card variant="outline" class="w-full flex items-center justify-start border-none shadow-none bg-transparent">
    <Label for="toggleClearAuto" class="flex-1 text-muted-foreground cursor-pointer">Enable Automatic Clearing</Label>
    <Switch id="toggleClearAuto"/>
  </Card>
</template>

<script setup>
import { Card } from '@/components/ui/card';
import { useMemoryStore } from '@/store/memory';
import { Switch } from '@/components/ui/switch';

//state
const memoryStore = useMemoryStore()

//function
const onCloseModal = () => {
  const closeBtn = document.getElementById('close-btn')
  closeBtn?.click()
}
const onClearChat = () => {
  if (memoryStore.isLoading) return
  memoryStore.clearMemory()
  onCloseModal()
}
</script>