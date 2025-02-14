<template>
  <Card class="w-full flex items-center justify-start px-0 border-none shadow-none bg-transparent">
    <Label for="toggleTheme" class="flex-1 text-muted-foreground cursor-pointer">{{ toggleTitle }}</Label>
    <Switch id="toggleTheme" @click="toggleDarkMode">
      <template #thumb>
        <component :is="toggleIcon" class="size-5 p-0.5 text-amber-500"/>
      </template>
    </Switch>
  </Card>
</template>

<script setup>
import { Label } from '@/components/ui/label';
import { Moon, Sun } from 'lucide-vue-next';
import { Switch } from '@/components/ui/switch';

//state
const colorMode = useColorMode()

//computed
const toggleIcon = computed(() => colorMode.preference === 'dark' ? Sun : Moon)
const toggleTitle = computed(() => colorMode.preference === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode')
// const toggleClass = computed(() => colorMode.preference === 'dark' )

//function
const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>