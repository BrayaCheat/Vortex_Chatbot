<template>
  <div class="flex items-start flex-1 gap-3 pb-6">
    <Avatar class="size-[40px]">
      <AvatarImage :src="profile" class="object-cover max-w-full min-w-full" />
    </Avatar>
    <Card
      class="text-muted-foreground pl-3 pr-6 py-2 border-none shadow-none flex flex-col gap-3 max-w-[800px] min-w-[800px]">
      <!-- <span v-if="role === 'ai'">OHLELE RESPONSE</span> -->
      <div v-html="message" />
    </Card>
  </div>

</template>

<script setup>
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import "highlight.js/styles/github-dark.css"
import hljs from 'highlight.js'
import { marked } from 'marked'

//options
marked.options({
  silent: true,
  gfm: true,
  breaks: true,
  highlight: (code, lang) => {
    const validLang = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language: validLang }).value;
  }
});

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
})

console.log("props: ", props.data.prompt)

//computed
const profile = computed(() => props?.data?.role === 'ai' ? '/images/delulu.jpg' : '/images/user.jpg')
const message = computed(() => {
  const text = props?.data?.prompt || 'Error props'
  if (typeof text !== 'string') {
    return 'Error props'
  }
  return marked.TextRenderer(text)
})
const role = computed(() => props?.data?.role || '')


//life cycle
onMounted(() => {
  nextTick(() => {
    hljs.highlightAll()
  })
})

onUpdated(() => {
  nextTick(() => {
    hljs.highlightAll()
  })
})
</script>
