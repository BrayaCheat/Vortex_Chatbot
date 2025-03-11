<template>
  <nav class="flex items-center px-3 border-b border-border bg-primary-foreground text-muted-foreground">
      <component :is="toggleIcon" class="size-5 cursor-pointer" @click="toggleHistoryPanel"/>
      <div class="flex flex-1 items-center justify-between p-3 text-md">
        <Badge variant="secondary">VORTEX</Badge>
      </div>
  </nav>
</template>

<script setup>
import { ChevronsRight, ChevronsLeft } from 'lucide-vue-next';
import { UseSettingStore } from '@/store/setting';
import { Badge } from '@/components/ui/badge';

const settingStore = UseSettingStore()
const toggleIcon = computed(() => settingStore.isOpenHistoryPanel ? ChevronsLeft : ChevronsRight)
const toggleHistoryPanel = () => settingStore.isOpenHistoryPanel = !settingStore.isOpenHistoryPanel
</script>
