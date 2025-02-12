<template>
  <div class="flex flex-col items-center justify-center flex-1 h-[50vh] text-center">
    <component :is="Brain" class="size-20 text-muted-foreground animate-pulse mb-3"/>
    <span class="text-muted-foreground text-[16px]">Ready To BrainStorm?</span>
    <span class="md:text-[14px] text-[12px] text-green-500">Share Your Idea Below.</span>
  </div>
</template>

<script setup>
  import { Brain } from 'lucide-vue-next';
</script>