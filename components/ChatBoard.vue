<template>
  <div :class="`flex ${justify} flex-1 gap-3 items-start`">
    <Avatar v-if="role" class="md:block hidden border border-border">
      <AvatarImage src="/icons/icon-128.png"/>
    </Avatar>
    <div :class="`${chatBoxStyle} response-box rounded-3xl`" v-html="message"/>
  </div>
</template>

<script setup>
import '@/assets/css/chat.css'
import "highlight.js/styles/github-dark.css"
import hljs from 'highlight.js'
import { marked } from 'marked'
import { Avatar } from '@/components/ui/avatar'

// Props
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

// computed
const message = computed(() => {
  marked.options({
    silent: true,
    breaks: true,
    highlight: (code, lang) => {
      return hljs.highlightAuto(code).value
      // const language = lang && hljs.getLanguage(lang) ? lang : 'bash';
      // return hljs.highlight(code, { language }).value;
    }
  })
  const text = props?.data?.prompt || ''
  if(typeof text !== 'string'){
    return ''
  }
  return marked(text)
})
const justify = computed(() => props?.data?.role === 'ai' ? 'justify-start' : 'justify-end')
const chatBoxStyle = computed(() => props?.data?.role === 'ai'
  ? 'text-muted-foreground'
  : 'px-6 bg-primary-foreground text-primary border border-border');

const role = computed(() => props?.data?.role === 'ai')

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