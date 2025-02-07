<template>
  <aside
    :class="`${isSidePanelOpen ? 'w-[60px]' : 'w-[200px]'} flex flex-col items-start border-e py-6 ps-1.5 overflow-hidden`">
    <div class="flex-1 flex flex-col items-start gap-3">

      <!-- <Button @click="toggleSidePanel" variant="ghost" class="flex items-center gap-3">
          <component :is="isSidePanelOpen ? PanelRightClose : PanelLeftClose" class="text-muted-foreground" />
          <span>OHLELE</span>
        </Button> -->

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button @click="toggleDark" variant="ghost">
              <component v-if="isDark" :is="Sun" class="text-muted-foreground" />
              <component v-else :is="Moon" class="text-muted-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent class="text-[12px] text-muted-foreground shadow-none">
            <p>Theme toggle</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button @click="onClearMemory" variant="ghost">
              <component :is="Trash" class="text-destructive" />
            </Button>
          </TooltipTrigger>
          <TooltipContent class="text-[12px] text-muted-foreground shadow-none">
            <p>Clear chat</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>

    <div>
      <Button variant="ghost">
        <component :is="Settings" class="text-muted-foreground" />
      </Button>
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