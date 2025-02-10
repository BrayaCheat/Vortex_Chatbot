<template>
  <div :class="`flex flex-col ${chatStyle} flex-1 gap-3 pb-6`">
    <UserIcon :data="props.data" />
    <div :class="`${chatBoxStyle} response-box rounded-xl`" v-html="message" />
  </div>
</template>

<script setup>
import '@/components/UserIcon.vue'
import "highlight.js/styles/github-dark.css"
import hljs from 'highlight.js'
import { marked } from 'marked'

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
    breaks: true,
    highlight: (code, lang) => hljs.highlightAuto(code).value
  })
  const text = props?.data?.prompt || ''
  return marked(text)
})
const chatStyle = computed(() => props?.data?.role === 'ai' ? 'items-start' : 'items-end')
const chatBoxStyle = computed(() => props?.data?.role === 'ai' ? 'whitespace-pre-line' : 'whitespace-normal bg-primary-foreground p-3')

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
  /* background-color: hsl(var(--primary-foreground)); */
}

::v-deep .response-box p {
  display: flex;
  flex-direction: column;
  color: hsl(var(--muted-foreground));
  font-size: 16px;
}

::v-deep .response-box p strong {
  color: hsl(var(--primary));
  font-size: 24px;
  font-weight: 700;
}

::v-deep .response-box ul li {
  /* display: flex;
  flex-direction: column; */
  list-style-type: disc;
  color: hsl(var(--muted-foreground));
  font-size: 16px;
}

::v-deep .response-box ul li::marker {
  content: '';
}

::v-deep .response-box ul li strong {
  color: hsl(var(--primary));
  font-size: 18px;
  font-weight: 700;
  padding: 6px;
  background-color: hsl(var(--primary-foreground));
  width: fit-content;
  border-radius: 10px;
}

::v-deep .response-box ul li code {
  background-color: hsl(var(--primary));
  color: rgb(16 185 129 / var(--tw-text-opacity, 1));
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  font-size: 14px;
}

::v-deep .response-box ul li ul li strong {
  color: hsl(var(--primary));
  font-size: 14px;
  font-weight: 500;
}

::v-deep .response-box pre {
  padding: 12px;
  border-radius: 5px;
  overflow-x: auto;
}

::v-deep .response-box pre code {
  font-size: 14px;
}

::v-deep .response-box pre code span {
  font-size: 14px;
}

.response-box h1,
.response-box h2,
.response-box h3 {
  color: #66f7d8;
  /* Light teal color for headers */
}

.response-box p {
  margin-bottom: 10px;
}

.response-box a {
  color: #5c98c5;
  text-decoration: underline;
}
</style>
