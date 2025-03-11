<template>
  <Dialog>
    <DialogTrigger as-child>
      <Card variant="none" class="flex items-center p-3 rounded-3xl border border-border shadow-none bg-primary-foreground cursor-pointer">
        <span class="text-[14px] text-muted-foreground flex-1 font-medium">Settings</span>
        <div class="flex-1 flex items-center justify-end">
          <component :is="MoveRight" class="size-4 text-muted-foreground" />
        </div>
      </Card>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle class="hidden" />
      <DialogDescription class="hidden" />
      <EnableNotification />
      <EnableSmartModel />
      <EnableDarkMode />
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import EnableDarkMode from '@/components/EnableDarkMode.vue';
import EnableNotification from '@/components/EnableNotification.vue';
import EnableSmartModel from '@/components/EnableSmartModel.vue';
import { MoveRight } from 'lucide-vue-next';
</script>