<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Mail } from 'lucide-vue-next';
import { ToastTitle, type ToastTitleProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<ToastTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastTitle v-bind="delegatedProps" :class="cn('text-[14px] flex items-center gap-3 text-primary', props.class)">
    <slot />
  </ToastTitle>
</template>
