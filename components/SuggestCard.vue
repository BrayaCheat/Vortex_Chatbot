<template>
  <Card
  @click="onSuggestClick"
  class="rounded-3xl p-3 flex flex-col items-start gap-3 md:w-full w-auto duration-300 hover:scale-105 hover:border-primary cursor-pointer"
>
  <component
    :is="suggestion.icon"
    :class="`p-1.5 rounded-full size-8 ${suggestion.color}`"
  />

  <!-- Dynamic width for title -->
  <h1 class="text-md duration-0 truncate md:w-full w-[200px]">
    {{ suggestion.title }}
  </h1>

  <!-- Dynamic width for prompt with truncation -->
    <span class="text-xs text-muted-foreground line-clamp-3 w-full">
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
    emits('onSuggestion', suggestion.value?.prompt)
  }
</script>