<template>
  <Card
    @click="onSuggestClick"
    class="rounded-[10px] bg-primary-foreground p-3 flex flex-col items-start gap-3 md:w-full w-[190px] hover:bg-primary hover:text-primary-foreground cursor-pointer">
    <component
      :is="suggestion.icon"
      :class="`p-1.5 rounded-full size-8 ${suggestion.color}`"
    />
    <h1 class="text-[14px] duration-0">
      {{ suggestion.title }}
    </h1>
    <div class="overflow-hidden h-[50px]">
      <span class="text-[12px] text-muted-foreground line-clamp-3">
        {{ suggestion.prompt }}
      </span>
    </div>
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