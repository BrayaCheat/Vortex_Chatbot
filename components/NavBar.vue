<template>
  <nav class="flex items-center md:p-3 py-3 border-b border-border bg-primary-foreground text-muted-foreground">
    <div class="container md:mx-[200px] flex items-center">
      <SidePanel />
      <div class="flex-1">
        <Badge variant="secondary">VORTEX</Badge>
      </div>
      <UserDisplayCard />
    </div>

  </nav>
</template>

<script setup>
import { ChevronsRight, ChevronsLeft } from 'lucide-vue-next';
import { UseSettingStore } from '@/store/setting';
import { Badge } from '@/components/ui/badge';
import SidePanel from '@/components/SidePanel.vue';
import UserDisplayCard from '@/components/UserDisplayCard.vue';

const settingStore = UseSettingStore()
</script>
