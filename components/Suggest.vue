<template>
  <div v-if="!memoryStore.memoryList.length" class="md:mx-[250px]">
    <Card class="col-span-4 flex flex-col items-center justify-center border-none shadow-none h-[50vh]">
      <span class="text-4xl font-bold">Get Started With Vortex</span>
      <span class="text-md text-muted-foreground">Share Your Idea Below.</span>
    </Card>
    <div class="flex items-center gap-3 overflow-x-auto md:grid md:grid-cols-4 p-3">
      <div v-for="item, index in suggestions" :key="index">
        <SuggestCard :data="item" @onSuggestion="onSuggestion" />
      </div>
    </div>

  </div>
</template>

<script setup>
import SuggestCard from '@/components/SuggestCard.vue';
import { useSuggestData } from '@/composables/SuggestData';
import { useMemoryStore } from '@/store/memory';

//state
const memoryStore = useMemoryStore()
const { suggestions } = useSuggestData()
const emits = defineEmits(['onSuggestion'])

//function
const onSuggestion = (payload) => {
  emits('onSuggestion', payload)
}
</script>