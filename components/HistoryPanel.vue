<template>
  <div class="border-l md:flex hidden flex-col overflow-auto h-screen w-[300px]">
    <div class="border-b border-border bg-primary-foreground">
      <div class="flex items-center justify-between p-3 text-md text-muted-foreground">
        <div class="flex items-center gap-1">
          <component :is="Clock" class="size-5" />
          <h1>History</h1>
        </div>
        <Badge variant="secondary">
          {{ historyList.length }} / 10
        </Badge>

      </div>
    </div>

    <div v-if="historyList.length" class="flex flex-1 flex-col overflow-auto h-full">
      <div v-for="(item, index) in historyList" :key="index" class="p-3 flex flex-col">
        <Dialog>
          <DialogTrigger>
            <Card class="py-2 px-6 flex flex-col w-full items-start hover:border-primary duration-300 cursor-pointer bg-primary-foreground">
              <h1 class="text-md font-semibold">
                {{ sliceLetter(item[0]?.prompt || '', 25) }}
              </h1>
              <p class="text-sm text-muted-foreground">
                {{ sliceLetter(item[1]?.prompt || '', 25) }}
              </p>
            </Card>
          </DialogTrigger>
          <DialogContent class="overflow-auto h-full">
            {{ item[1].prompt }}
          </DialogContent>
        </Dialog>
      </div>
    </div>
    <div v-else class="flex flex-1 flex-col overflow-auto h-full p-3">
      <Card class="bg-primary-foreground border-border border shadow-none text-md text-muted-foreground p-3">
        <p>Make your first conversation with Vortex</p>
      </Card>
    </div>
    <div class="p-3">
      <ClearChat />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMemoryStore } from '@/store/memory';
import { Card } from '@/components/ui/card';
import ClearChat from '@/components/ClearChat.vue';
import { Dialog, DialogTrigger, DialogContent, } from '@/components/ui/dialog'
import { Clock } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';

const memoryStore = useMemoryStore();

// Ensure function handles undefined or empty arrays properly
const getHistoryList = (memoryList = []) => {
  if (!Array.isArray(memoryList) || memoryList.length === 0) return [];

  let res = [];
  for (let i = 0; i < memoryList.length; i += 2) {
    if (memoryList[i] && memoryList[i + 1]) {
      res.push([memoryList[i], memoryList[i + 1]]);
    } else {
      res.push([memoryList[i]]);
    }
  }

  return res.sort((a, b) => {
    const dateA = a[0]?.date || 0;
    const dateB = b[0]?.date || 0;
    return dateB - dateA; // Sort descending by date
  });
};

// Computed property to update history list reactively
const historyList = computed(() => getHistoryList(memoryStore.memoryList));

// Function to slice text safely
const sliceLetter = (str, offset) => {
  return str.length > offset ? `${str.slice(0, offset)}...` : str;
};
</script>
