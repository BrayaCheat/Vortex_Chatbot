<template>
  <Dialog>
    <DialogTrigger>
      <Card
        class="py-2 px-6 w-full items-start hover:border-primary duration-300 cursor-pointer bg-primary-foreground text-muted-foreground">
        <h1 class="text-sm text-left">
          {{ sliceText(props.data.prompt) }}
        </h1>
      </Card>
    </DialogTrigger>
    <DialogContent class="overflow-auto ">
      <DialogHeader class="hidden"/>
      <DialogTitle class="hidden"/>
      <DialogDescription class="hidden"/>
      <div v-html="getMessage" class="response-box rounded-3xl" />
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Dialog, DialogTrigger, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card } from '@/components/ui/card';
import '@/assets/css/chat.css'
import "highlight.js/styles/github-dark.css"
import hljs from 'highlight.js'
import { marked } from 'marked'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const getMessage = computed(() => {
  marked.options({
    silent: true,
    breaks: true,
    highlight: (code, lang) => {
      return hljs.highlightAuto(code).value;
    }
  });
  return marked(props.data.prompt);
});

const sliceText = (str) => {
  if(!str) return
  return `${str?.slice(0,35)}...`
}
</script>