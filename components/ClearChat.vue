<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline" class="w-full flex items-center justify-start" :disabled="memoryStore.isLoading">
        <component :is="Trash" class="mr-3" />
        <span>Clear Conversation</span>
      </Button>
    </DialogTrigger>
    <DialogContent class="rounded-[10px]">
      <DialogTitle>Do you want to clear this conversation?</DialogTitle>
      <DialogDescription>
        <div class="flex items-center justify-end gap-3">
          <DialogClose as-child>
            <Button id="close-btn" variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" @click="onClearChat" :disabled="memoryStore.isLoading">Remove</Button>
        </div>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { useMemoryStore } from '@/store/memory';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Trash } from 'lucide-vue-next';

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