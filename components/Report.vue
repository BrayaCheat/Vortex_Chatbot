<template>
  <a href="mailto:prayacheat@gmail.com?subject=Bugs-Report&body=Leave your message here...">
    <Button variant="ghost">
      <component :is="FileWarning" class="text-muted-foreground"/>
    </Button>
  </a>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Bug, FileWarning } from 'lucide-vue-next';
</script>