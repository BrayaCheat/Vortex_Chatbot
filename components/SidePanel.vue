<template>
  <aside :class="`${isSidePanelOpen ? 'w-[60px] items-center' : 'w-[300px] items-start'} flex flex-col border-e p-3 overflow-hidden`">
    <div class="flex-1 flex flex-col items-center gap-9">

      <!-- <component
        :is="isSidePanelOpen ? PanelRightClose : PanelLeftClose"
        class="text-muted-foreground cursor-pointer hover:text-secondary"
        @click="toggleSidePanel"
      /> -->

      <component
        v-if="isDark"
        :is="Sun"
        class="text-muted-foreground cursor-pointer hover:text-secondary"
        @click="toggleDark"
      />
      <component
        v-else
        :is="Moon"
        class="text-muted-foreground cursor-pointer hover:text-secondary"
        @click="toggleDark"
      />

      <component
        @click="onClearMemory"
        :is="Trash"
        class="text-destructive cursor-pointer hover:text-secondary"
      />
    </div>

    <div class="flex-1 flex flex-col justify-end">
      <component
        :is="Settings"
        class="text-muted-foreground cursor-pointer hover:text-secondary"
      />
    </div>
  </aside>
</template>

<script setup>
import { PanelRightClose, PanelLeftClose, Settings, Trash, Moon, Sun } from 'lucide-vue-next';
import { useMemoryStore } from '@/store/memory';
import { useDark } from '@vueuse/core';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import HistoryCard from '@/components/HistoryCard.vue';

//state
const isDark = useDark()
const isSidePanelOpen = ref(true)
const memoryStore = useMemoryStore()

//functions
const toggleSidePanel = () => {
  isSidePanelOpen.value = !isSidePanelOpen.value
}

const onClearMemory = () => {
  memoryStore.clearMemory()
}

const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>

<style scoped>
span {
  font-size: 14px;
}
</style>