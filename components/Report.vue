<template>
  <a href="mailto:prayacheat@gmail.com?subject=Bugs-Report&body=Leave your message here...">
    <component :is="Bug" />
  </a>
</template>

<script setup>
import { Button } from '@/components/ui/button';
import { Bug } from 'lucide-vue-next';
</script>