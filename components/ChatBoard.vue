<template>
  <div class="flex items-start flex-1 gap-3 pb-6">
    <!-- <Avatar class="size-[40px]">
      <AvatarImage :src="profile" class="object-cover max-w-full min-w-full" />
    </Avatar> -->
    <div class="response-box" v-html="message"/>
  </div>
</template>

<script setup>
import { Avatar } from '@/components/ui/avatar'
import "highlight.js/styles/github-dark.css"
import hljs from 'highlight.js'
import {formattedText} from '@/utils/helper'
import {marked} from 'marked'

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
  marked.options({
    breaks: true,
    highlight: (code, lang) => hljs.highlightAuto(code).value
  })
  return marked(props?.data?.prompt)
})

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

<style scoped>
.response-box {
  white-space: pre-wrap;
  font-family: 'Arial', sans-serif;
  padding: 10px;
  background-color: whitesmoke;
  border-radius: 8px;
}

::v-deep .response-box p strong {
  font-size: 20px;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}

.response-box pre {
  background-color: #282c34;
  color: #f1f1f1;
  padding: 12px;
  border-radius: 5px;
  overflow-x: auto;
}

.response-box code {
  font-size: 0.95rem;
  padding: 2px 5px;
  background-color: #333;
  border-radius: 3px;
}

.response-box h1,
.response-box h2,
.response-box h3 {
  color: #66f7d8; /* Light teal color for headers */
}

.response-box p {
  margin-bottom: 10px;
}

.response-box a {
  color: #5c98c5;
  text-decoration: underline;
}
</style>
