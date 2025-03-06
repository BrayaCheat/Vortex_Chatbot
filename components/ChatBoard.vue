<template>
  <div :class="`flex ${justify} flex-1 gap-3 items-start`">
    <Avatar v-if="role" class="md:block hidden border border-border">
      <AvatarImage src="/icons/icon-128.png"/>
    </Avatar>
    <div :class="`${chatBoxStyle} response-box rounded-3xl`" v-html="message"/>
  </div>
</template>

<script setup>
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

<!-- <style scoped>
.response-box {
  overflow: hidden;
  text-wrap: pre-line;
}

::v-deep .response-box h2 {
  font-size: 14px !important;
}

::v-deep .hljs {
    white-space: pre;
    overflow-x: auto;
    font-size: 14px !important;
    flex: 1 !important;
    width: 100% !important;
    padding: 10px !important;
    border: 1px solid hsl(var(--input));
    border-radius: 10px;
}

@media (max-width: 768px){
  ::v-deep .hljs {
    white-space: pre;
    overflow-x: auto;
    font-size: 12px !important;
    flex: 1 !important;
    width: 100% !important;
    padding: 10px !important;
    border: 1px solid hsl(var(--input));
    border-radius: 10px;
}
}

::v-deep .response-box p {
  color: hsl(var(--muted-foreground));
  font-size: 14px;
}

::v-deep .response-box p strong {
  color: hsl(var(--primary));
  font-size: 16px;
  font-weight: 700;
}

::v-deep .response-box p em {
  background-color: hsl(var(--primary-foreground));
  color: rgb(16 185 129 / var(--tw-text-opacity, 1));
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  font-size: 14px;
}

::v-deep .response-box p em strong {
  background-color: hsl(var(--primary-foreground));
  color: rgb(16 185 129 / var(--tw-text-opacity, 1));
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  font-size: 14px;
}

::v-deep .response-box ul {
  list-style-type: disc;
  font-size: 14px;
  padding-left: 30px;
}

::v-deep .response-box ol {
  list-style: decimal;
  color: hsl(var(--primary));
  font-size: 14px;
  padding-left: 30px;
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
  font-size: 14px;
  font-weight: 700;
  margin-right: 6px;
  width: fit-content;
}

/* list style */
/* ::v-deep .response-box ul li strong::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: hsl(var(--primary));
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
} */

::v-deep .response-box ul li em {
  background-color: hsl(var(--primary-foreground));
  color: rgb(16 185 129 / var(--tw-text-opacity, 1));
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
  font-size: 14px;
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
  font-size: 14px;
  font-weight: 700;
  margin-right: 6px;
  width: fit-content;
}

/* list style */
/* ::v-deep .response-box ol li strong::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: hsl(var(--primary));
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
} */

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

@media (max-width: 768px) {
  ::v-deep .response-box table {
    font-size: 12px !important;
  }
}

::v-deep .response-box table {
  font-size: 14px;
  border-collapse: collapse;
}

::v-deep .response-box table thead {
  font-size: 14px;
  font-weight: 700;
  background-color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}

::v-deep .response-box table tr td {
  border: 1px solid hsl(var(--border));
  padding: 10px;
}
</style> -->

<!-- second style -->
<!-- <style scoped>
/* General Styling */
.response-box {
  overflow: hidden;
  text-wrap: pre-line;
}

/* Headings */
::v-deep .response-box h2 {
  font-size: 14px !important;
}

/* Code Blocks */
::v-deep .hljs {
  white-space: pre;
  overflow-x: auto;
  font-size: 14px !important;
  flex: 1 !important;
  width: 100% !important;
  padding: 10px !important;
  border: 1px solid hsl(var(--input));
  border-radius: 10px;
}

@media (max-width: 768px) {
  ::v-deep .hljs {
    font-size: 12px !important; /* Adjusting only the font size for small screens */
  }
}

/* Paragraph Styling */
::v-deep .response-box p {
  color: hsl(var(--muted-foreground));
  font-size: 14px;
}

/* Strong (Bold) Text */
::v-deep .response-box p strong,
::v-deep .response-box ul li strong,
::v-deep .response-box ol li strong {
  color: hsl(var(--primary));
  font-size: 16px;
  font-weight: 700;
  margin-right: 6px;
  width: fit-content;
}

/* Italic (Emphasized) Text */
::v-deep .response-box p em,
::v-deep .response-box ul li em,
::v-deep .response-box ol li em {
  background-color: hsl(var(--primary-foreground));
  color: rgb(16 185 129 / var(--tw-text-opacity, 1));
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  font-size: 14px;
}

/* Strong + Italic */
::v-deep .response-box p em strong {
  background-color: hsl(var(--primary-foreground));
  padding: 6px;
  border-radius: 10px;
}

/* Lists */
::v-deep .response-box ul {
  list-style-type: disc;
  font-size: 14px;
  padding-left: 20px;
}

::v-deep .response-box ol {
  list-style-type: decimal;
  color: hsl(var(--primary));
  font-size: 14px;
  padding-left: 20px;
}

::v-deep .response-box ol li,
::v-deep .response-box ul li {
  color: hsl(var(--muted-foreground));
  font-size: 14px;
}

/* Code Styling inside Lists */
::v-deep .response-box ul li code,
::v-deep .response-box ol li code {
  background-color: hsl(var(--primary-foreground));
  color: rgb(16 185 129 / var(--tw-text-opacity, 1));
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  font-size: 14px;
}

/* Underlined Links in <em> */
::v-deep .response-box ul li em a {
  text-decoration: underline;
}

/* Preformatted Blocks */
::v-deep .response-box pre {
  border-radius: 10px;
  overflow-x: auto;
  flex: 1;
  width: 100%;
}

/* Tables */
::v-deep .response-box table {
  font-size: 14px;
  border-collapse: collapse;
}

::v-deep .response-box table thead {
  font-weight: 700;
  background-color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}

::v-deep .response-box table tr td {
  border: 1px solid hsl(var(--border));
  padding: 10px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  ::v-deep .response-box table {
    font-size: 12px !important;
  }
}
</style> -->

<!-- chatgpt style -->
<style scoped>
/* Headings */
::v-deep .response-box h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 30px 0px;
}

/* Code Blocks */
::v-deep .hljs,
::v-deep .response-box pre {
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
  font-size: 14px;
  padding: 12px;
  background: hsl(var(--secondary));
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
}

/* Inline Code */
::v-deep .response-box code {
  background-color: hsl(var(--secondary));
  color: rgb(16 185 129 / var(--tw-text-opacity, 1));
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Fira Code', monospace;
}

/* Paragraph Styling */
::v-deep .response-box p {
  font-size: 16px;
  color: hsl(var(--muted-foreground));
  margin: 10px 0px;
}

/* Bold Text */
::v-deep .response-box strong {
  color: hsl(var(--primary));
  font-weight: 500;
  font-size: 16px;
  margin: 30px 0px;
}

/* Italic Text */
::v-deep .response-box em {
  font-style: italic;
  color: hsl(var(--muted-foreground));
}

/* Lists */
::v-deep .response-box ul,
::v-deep .response-box ol {
  padding-left: 30px;
  margin: 30px 0px;
}

::v-deep .response-box ul {
  list-style-type: disc;
}

::v-deep .response-box ol {
  list-style-type: disc;
}

::v-deep .response-box li {
  margin-bottom: 15px;
  font-size: 16px;
}

/* Blockquotes */
::v-deep .response-box blockquote {
  border-left: 4px solid hsl(var(--primary));
  padding: 10px 15px;
  background-color: hsl(var(--primary-foreground));
  font-style: italic;
  margin: 30px 0;
}

/* Tables */
::v-deep .response-box table {
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
  margin-top: 30px;
}

::v-deep .response-box table td,
::v-deep .response-box table th {
  border: 1px solid hsl(var(--border));
  padding: 10px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  ::v-deep .response-box {
    font-size: 16px;
  }

  ::v-deep .hljs,
  ::v-deep .response-box pre {
    font-size: 14px;
  }

  ::v-deep .response-box table {
    font-size: 14px;
  }
}
</style>

