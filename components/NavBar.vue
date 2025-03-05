<template>
  <nav class="flex items-center top-0 inset-x-0 z-50 border-b px-3 shadow-sm">
    <h1 class="font-semibold text-xl py-3 flex-1">{{ new Date().toDateString() }}</h1>
    <ClearChat />
    <Report class="bg-yellow-100 border border-yellow-300 text-yellow-500"/>
  </nav>
</template>

<script setup>
import ClearChat from '@/components/ClearChat.vue';
import Report from '@/components/Report.vue';
</script>
