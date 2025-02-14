<template>
  <Dialog>
    <DialogTrigger as-child>
      <Card class="w-full flex items-center justify-start border-none shadow-none bg-transparent text-muted-foreground">
        <Label class=" flex-1 cursor-pointer">Clear history</Label>
        <component :is="Trash" class="size-4" />
      </Card>
    </DialogTrigger>
    <DialogContent class="rounded-[10px] w-[90%]">
      <DialogTitle class="hidden" />
      <div class="flex flex-col items-start">
        <h1 class="text-[18px]">Clear Chat History?</h1>
        <span class="text-[14px] text-muted-foreground">Once you delete the conversation will be gone.</span>
      </div>
      <DialogDescription>
        <div class="flex items-center justify-end gap-3">
          <DialogClose as-child>
            <Button id="close-btn" variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" @click="onClearChat" :disabled="memoryStore.isLoading">
            <component :is="Trash" />
            <span>Clear</span>
          </Button>
        </div>
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
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