<template>
  <div :class="`flex items-center gap-3`">
    <Avatar class="size-[35px]">
      <AvatarImage src="/icons/icon-128.png" class="object-cover" />
    </Avatar>
    <!-- <div class="flex flex-col">
      <span class="text-[14px] text-muted-foreground">{{ chatDate }}</span>
      <span class="text-[14px]">{{ userName }}</span>
    </div> -->
  </div>
</template>

<script setup>
  import { Avatar, AvatarImage } from '@/components/ui/avatar'

  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })

  //computed

</script>