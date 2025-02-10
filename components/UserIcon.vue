<template>
  <div :class="`flex items-center gap-3 ${userIconStyle}`">
    <!-- <Avatar class="size-[40px]">
      <AvatarImage :src="profile" class="object-cover max-w-full min-w-full" />
    </Avatar> -->
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
  const profile = computed(() => props?.data?.role === 'ai' ? '/images/delulu.jpg' : '/images/user.jpg')
  const userName = computed(() => props?.data?.role === 'ai' ? 'OHLELE' : 'Anonymous')
  const chatDate = computed(() => new Date().toLocaleString())
  const userIconStyle = computed(() => props?.data?.role === 'ai' ? '' : 'flex-row-reverse')
</script>