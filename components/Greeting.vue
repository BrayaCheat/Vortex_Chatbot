<template>
  <div class="flex flex-col items-center justify-center flex-1 h-[70vh]">
    <component :is="Brain" class="size-20 text-muted-foreground animate-pulse"/>
    <span class="text-muted-foreground">{{ message }}</span>
  </div>
</template>

<script setup>
  import { Brain } from 'lucide-vue-next';
  const message = ref("Hi there! Welcome to OHLELE AI. I'm ready to assist you. Just type your request in the field below.")
</script>