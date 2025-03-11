<template>

  <div class="border-r md:flex hidden flex-col overflow-auto h-screen duration-300"
  :style="{ width: `${sidebarWidth}px` }"
    >
    <div
      class="border-b border-border bg-primary-foreground flex flex-nowrap items-center justify-between p-3 text-muted-foreground">
      <Badge variant="secondary">History</Badge>
      <Badge variant="secondary">{{ badgeCount }}</Badge>
    </div>
    <div class="flex flex-col justify-between h-screen overflow-auto gap-3">
      <div
          v-if="historyList.length > 0"
          class="flex flex-1 flex-col overflow-auto h-full m-3">
          <ClearChat/>
          <HistoryModal
            v-for="(item, index) in historyList"
            :key="index"
            :data="item"
          />
      </div>
      <div v-else class="flex-1 flex flex-col justify-center">
        <HistoryNotFound />
      </div>


      <div class="p-3 flex flex-col gap-3">
        <SettingButton />
        <UserDisplayCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMemoryStore } from '@/store/memory';
import { UseSettingStore } from '@/store/setting';
import UserDisplayCard from '@/components/UserDisplayCard.vue';
import Subscription from '@/components/Subscription.vue';
import ClearChat from '@/components/ClearChat.vue';
import { Badge } from '@/components/ui/badge';
import SettingButton from '@/components/SettingButton.vue';

const settingStore = UseSettingStore()
const memoryStore = useMemoryStore();
const sidebarWidth = ref(300);
const opacityLevel = ref(100)

const historyList = computed(() => memoryStore.memoryList.filter(item => item.role !== 'user') || 0);
const badgeCount = computed(() => `${historyList.value.length} / 20`)

watch(() => settingStore.isOpenHistoryPanel, (val) => {
  if (!val) {
    sidebarWidth.value = 0
    opacityLevel.value = 0
  } else {
    sidebarWidth.value = 300
    opacityLevel.value = 100
  }
})
</script>