<template>
  <div class="flex items-start flex-1 gap-3 pb-6">
    <Avatar class="size-[40px]">
      <AvatarImage :src="profile" class="object-cover max-w-full min-w-full" />
    </Avatar>
    <Card
      class="text-muted-foreground pl-3 pr-6 py-2 border-none shadow-none flex flex-col gap-3 max-w-[800px] min-w-[800px]">
      <div v-html="message" />
    </Card>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, nextTick } from 'vue'
import { Card } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import "highlight.js/styles/github-dark.css"
import hljs from 'highlight.js'
import {formattedText} from '@/utils/helper'

// Props
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// Reactive state
const profile = computed(() => props?.data?.role === 'ai' ? '/images/delulu.jpg' : '/images/user.jpg')
const message = computed(() => {
  const text = props?.data?.prompt || ''
  return formattedText(text)
})

onMounted(() => {
  nextTick(() => {
    hljs.highlightAll()
  })
})
</script>
