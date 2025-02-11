<template>
  <Button
    variant="outline"
    @click="toggleDarkMode"
    class="w-full flex items-center justify-start"
  >
    <component :is="toggleIcon" class="mr-3"/>
    <span>{{ toggleTitle }}</span>
  </Button>
</template>

<script setup>
  import { useDark } from '@vueuse/core';
  import { Button } from '@/components/ui/button';
  import { Moon, Sun } from 'lucide-vue-next';

  //state
  const isDark = useDark()

  //computed
  const toggleIcon = computed(() => isDark.value ? Sun : Moon)
  const toggleTitle = computed(() => isDark.value ? 'Light Mode' : 'Dark Mode')

  //function
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }

  //watcher
  watch(() => isDark.value, (val) => {
    console.log("theme: ", val)
  })
</script>