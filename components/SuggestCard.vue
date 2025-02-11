<template>
  <Card
  @click="onSuggestClick"
  class="rounded-[10px] bg-primary-foreground p-3 flex flex-col items-start gap-3 md:w-full w-auto hover:bg-primary hover:text-primary-foreground cursor-pointer"
>
  <component
    :is="suggestion.icon"
    :class="`p-1.5 rounded-full size-8 ${suggestion.color}`"
  />

  <!-- Dynamic width for title -->
  <h1 class="text-[14px] duration-0 truncate md:w-full w-[200px]">
    {{ suggestion.title }}
  </h1>

  <!-- Dynamic width for prompt with truncation -->
    <span class="text-[12px] text-muted-foreground line-clamp-3 w-full">
      {{ suggestion.prompt }}
    </span>
</Card>
</template>

<script setup>
  import { Card } from '@/components/ui/card';

  //state
  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })
  const emits = defineEmits(['onSuggestion'])

  //computed
  const suggestion = computed(() => props?.data || [])

  const onSuggestClick = () => {
    emits('onSuggestion', suggestion.value)
  }
</script>