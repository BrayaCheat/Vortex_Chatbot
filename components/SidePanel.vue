<template>
  <Sheet>
    <SheetTrigger>
      <Button>
        <component :is="PanelLeft" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="p-0 flex flex-col">
      <SheetTitle class="hidden" />
      <SheetDescription class="hidden" />
      <div
        class="border-b border-border bg-primary-foreground flex flex-nowrap items-center justify-between p-3 text-muted-foreground">
        <Badge variant="secondary">History</Badge>
        <Badge variant="secondary">{{ badgeCount }}</Badge>
      </div>
      <div class="flex flex-1 flex-col justify-between overflow-auto gap-3">
        <div v-if="historyList.length > 0" class="flex flex-1 flex-col gap-3 p-3">
          <ClearChat />
          <HistoryModal v-for="(item, index) in historyList" :key="index" :data="item" />
        </div>
        <div v-else class="flex-1 flex flex-col justify-center">
          <HistoryNotFound />
        </div>
        <div class="p-3 flex flex-col gap-3">
          <SettingButton />
          <UserDisplayCard />
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>

<script setup>
import { useMemoryStore } from '@/store/memory';
import { UseSettingStore } from '@/store/setting';
import UserDisplayCard from '@/components/UserDisplayCard.vue';
import ClearChat from '@/components/ClearChat.vue';
import { Badge } from '@/components/ui/badge';
import SettingButton from '@/components/SettingButton.vue';
import { PanelLeft } from 'lucide-vue-next';

const memoryStore = useMemoryStore();

const historyList = computed(() => memoryStore.memoryList.filter(item => item.role !== 'user') || 0);
const badgeCount = computed(() => `${historyList.value.length} / 20`)
</script>