<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TooltipContent, type TooltipContentEmits, type TooltipContentProps, TooltipPortal, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TooltipContentProps & { class?: HTMLAttributes['class'] }>(), {
  sideOffset: 4,
})

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TooltipPortal>
  <TooltipContent
    v-bind="{ ...forwarded, ...$attrs }"
    :class="cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md',
      'animate-in fade-in-50 zoom-in-100', // Faster fade-in and zoom-in
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-50 data-[state=closed]:zoom-out-100',
      'data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
      props.class
    )"
  >
    <slot />
  </TooltipContent>
</TooltipPortal>

</template>
