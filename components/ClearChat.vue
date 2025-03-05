<template>
  <Dialog>
    <DialogTrigger as-child>
        <Button variant="destructive" v-if="showDeleteButton">
          <p>Delete Conversation</p>
          <!-- <component :is="Trash" class="text-muted-foreground size-[30px] cursor-pointer p-1" :class="memoryStore.memoryList.length <= 1 && 'cursor-not-allowed'"/> -->
        </Button>
    </DialogTrigger>
    <DialogContent class="rounded-[10px] w-[90%] p-3">
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

//state
const memoryStore = useMemoryStore()
const emits = defineEmits(['onCloseSidePanel'])

//computed
const showDeleteButton = computed(() => memoryStore.memoryList.filter((item) => item.role !== 'user').length >= 2)

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