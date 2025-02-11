<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline" class="w-full flex items-center justify-start">
        <component :is="Trash" class="mr-3" />
        <span>Clear Conversation</span>
      </Button>
    </DialogTrigger>
    <DialogContent class="rounded-[10px]">
      <DialogTitle>Do you want to clear this conversation?</DialogTitle>
      <DialogDescription>
        <div class="flex items-center justify-end gap-3">
          <DialogClose as-child>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" @click="onClearChat">Remove</Button>
        </div>
      </DialogDescription>
    </DialogContent>
  </Dialog>

</template>

<script setup>
import { Button } from '@/components/ui/button';
import { useMemoryStore } from '@/store/memory';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Trash } from 'lucide-vue-next';
import DialogClose from './ui/dialog/DialogClose.vue';

//state
const memoryStore = useMemoryStore()

//function
const onClearChat = () => {
  memoryStore.clearMemory()
  window.location.reload()
}
</script>