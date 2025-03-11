<template>
  <nav class="flex items-center p-3 border-b border-border bg-primary-foreground text-muted-foreground">
    <div class="container md:mx-[200px] flex items-center">
      <SidePanel />
      <div class="flex-1">
        <Badge variant="secondary">VORTEX</Badge>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { ChevronsRight, ChevronsLeft } from 'lucide-vue-next';
import { UseSettingStore } from '@/store/setting';
import { Badge } from '@/components/ui/badge';
import SidePanel from '@/components/SidePanel.vue';

const settingStore = UseSettingStore()
const toggleIcon = computed(() => settingStore.isOpenHistoryPanel ? ChevronsLeft : ChevronsRight)
const toggleHistoryPanel = () => settingStore.isOpenHistoryPanel = !settingStore.isOpenHistoryPanel
</script>
