<template>
  <div :class="`flex ${chatStyle} flex-1 gap-3 pb-6`">
    <Avatar v-if="role" class="md:block hidden">
      <AvatarImage src="/images/delulu.jpg"/>
    </Avatar>
    <div :class="`${chatBoxStyle} response-box rounded-xl`" v-html="message" />
  </div>
</template>

<script setup>
import '@/components/UserIcon.vue'
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
    breaks: true,
    highlight: (code, lang) => hljs.highlightAuto(code).value
  })
  const text = props?.data?.prompt || ''
  return marked(text)
})
const chatStyle = computed(() => props?.data?.role === 'ai' ? 'justify-start' : 'justify-end')
const chatBoxStyle = computed(() => props?.data?.role === 'ai' ? 'whitespace-pre-line text-muted-foreground' : 'whitespace-normal bg-primary-foreground text-primary px-3 py-1.5')
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

<style scoped>
.response-box {
  overflow: hidden;
  word-wrap: break-word;
}

::v-deep .hljs {
    white-space: pre;
    overflow-x: auto;
}

::v-deep .response-box p {
  color: hsl(var(--muted-foreground));
  font-size: 16px;
}

::v-deep .response-box p strong {
  color: hsl(var(--primary));
  font-size: 20px;
  font-weight: 900;
}

::v-deep .response-box ul li {
  color: hsl(var(--muted-foreground));
  font-size: 16px;
}

::v-deep .response-box ul li code {
  background-color: hsl(var(--primary-foreground));
  color: rgb(16 185 129 / var(--tw-text-opacity, 1));
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  font-size: 14px;
}

::v-deep .response-box ul li strong {
  color: hsl(var(--primary));
  font-size: 16px;
  font-weight: 700;
  margin-right: 6px;
  width: fit-content;
}

::v-deep .response-box ul li strong::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: hsl(var(--primary));
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
}

::v-deep .response-box ul li em {
  background-color: hsl(var(--primary-foreground));
  color: hsl(var(--destructive));
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  font-size: 14px;
}

::v-deep .response-box ul li em a {
  text-decoration: underline;
}

::v-deep .response-box ol li {
  color: hsl(var(--muted-foreground));
  font-size: 16px;
}

::v-deep .response-box ol li code {
  background-color: hsl(var(--primary-foreground));
  color: rgb(16 185 129 / var(--tw-text-opacity, 1));
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  font-size: 14px;
}

::v-deep .response-box ol li strong {
  color: hsl(var(--primary));
  font-size: 16px;
  font-weight: 700;
  margin-right: 6px;
  width: fit-content;
}

::v-deep .response-box ol li strong::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: hsl(var(--primary));
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
}

::v-deep .response-box ol li em {
  background-color: hsl(var(--primary-foreground));
  color: hsl(var(--destructive));
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  font-size: 14px;
}

::v-deep .response-box pre {
  border-radius: 10px;
  overflow-x: auto;
  flex: 1;
  width: 100%;
}

::v-deep .response-box pre code {
  font-size: 14px;
}

::v-deep .response-box pre code span {
  font-size: 14px;
}
</style>
