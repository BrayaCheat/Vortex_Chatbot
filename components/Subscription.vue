<template>
  <Card class="bg-primary-foreground border border-border text-center p-3 flex flex-col gap-3">
    <div class="flex flex-col">
      <p class="text-sm text-muted-foreground">current plan</p>
      <h1 class="text-lg">Basic</h1>
    </div>
    <p class="text-muted-foreground text-sm">10,000 Credits Left.</p>
    <Button class="w-full">
      Upgrade Plan
    </Button>
  </Card>
</template>

<script setup>
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
</script>