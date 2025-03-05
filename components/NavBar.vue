<template>
  <nav class="flex items-center top-0 inset-x-0 z-50 border-b">
    <h1 class="font-semibold text-xl py-3 pl-3">{{ new Date().toDateString() }}</h1>
    <ClearChat />
  </nav>
</template>

<script setup>
import ClearChat from '@/components/ClearChat.vue';
</script>
