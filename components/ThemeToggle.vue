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
  // const isDark = useDark()
  const colorMode = useColorMode()

  //computed
  const toggleIcon = computed(() => colorMode.preference === 'dark' ? Sun : Moon)
  const toggleTitle = computed(() => colorMode.preference === 'dark' ? 'Light Mode' : 'Dark Mode')

  //function
  // const toggleDarkMode = () => {
  //   isDark.value = !isDark.value
  // }
  const toggleDarkMode = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }

  //watcher
  watch(() => colorMode.preference, (val) => {
    console.log("theme: ", val)
  })
</script>