<template>
  <Dialog>
    <DialogTrigger as-child>
        <component :is="Trash" class="text-muted-foreground size-[30px] cursor-pointer p-1"/>
    </DialogTrigger>
    <DialogContent class="rounded-[10px] w-[90%]">
      <DialogTitle class="hidden" />
      <div class="flex flex-col items-start">
        <h1 class="text-[16px]">Clear conversation?</h1>
        <span class="text-[12px] text-muted-foreground">Once you clear, the conversation will be gone.</span>
      </div>
      <DialogDescription>
        <div class="flex items-center justify-end gap-3">
          <DialogClose as-child>
            <Button
              id="close-btn"
              variant="ghost"
              size="sm"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            @click="onClearChat"
            :disabled="memoryStore.isLoading"
            size="sm"
          >
            <span>Clear</span>
          </Button>
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
const emits = defineEmits(['onCloseSidePanel'])

//function
const onCloseModal = () => {
  const closeBtn = document.getElementById('close-btn')
  closeBtn?.click()
}
const onClearChat = () => {
  if (memoryStore.isLoading) return
  memoryStore.clearMemory()
  emits('onCloseSidePanel', true)
  onCloseModal()
}
</script>