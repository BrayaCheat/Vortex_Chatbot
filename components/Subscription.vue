<template>
  <Card class="bg-primary-foreground border border-border text-center p-3">
    <p class="text-sm text-muted-foreground">current plan</p>
    <h1 class="text-lg">Basic</h1>
    <p class="text-muted-foreground text-sm">10,000 Credits Left.</p>

    <input type="range" class="w-64 h-2 bg-blue-500 rounded-lg appearance-none outline-none cursor-pointer">
    <Button class="w-full">
      Upgrade Plan
    </Button>
  </Card>
</template>

<script setup>
  import { Card } from '@/components/ui/card';
  import { Button } from '@/components/ui/button';
</script>