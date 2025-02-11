<template>
  <Button variant="destructive" class="w-full flex items-center justify-start">
    <component :is="LogOut"/>
    <span>Sign out</span>
  </Button>
</template>

<script setup>
  import { Button } from '@/components/ui/button';
  import { LogOut } from 'lucide-vue-next';
</script>