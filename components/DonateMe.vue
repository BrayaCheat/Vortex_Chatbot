<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline" class="w-full flex items-center justify-start">
        <component :is="Coffee" class="mr-3" />
        <span>Donate Me</span>
      </Button>
    </DialogTrigger>
    <DialogContent class="rounded-[10px]">
      <DialogTitle class="text-center">🫶🏻 Thank for your kindness 🫶🏻</DialogTitle>
      <DialogDescription>
        <img :src="imageSource" alt="Braya ABA">
      </DialogDescription>
    </DialogContent>
  </Dialog>
</template>

<script setup>
  import { Button } from '@/components/ui/button';
  import { Coffee } from 'lucide-vue-next';
  import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'

  const imageSource = computed(() => '/images/myABA.jpg')
</script>