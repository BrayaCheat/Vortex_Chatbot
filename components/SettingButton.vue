<template>
  <Dialog>
    <DialogTrigger>
      <Badge variant="secondary" class="text-sm">Settings</Badge>
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
import { Badge } from '@/components/ui/badge';
import EnableDarkMode from '@/components/EnableDarkMode.vue';
import EnableNotification from '@/components/EnableNotification.vue';
import EnableSmartModel from '@/components/EnableSmartModel.vue';
</script>