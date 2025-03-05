<template>
  <div v-if="!memoryStore.memoryList.length" class="flex items-center gap-3 overflow-x-auto md:grid md:grid-cols-4 mx-3">
    <div v-for="item, index in suggestions" :key="index">
      <SuggestCard :data="item" @onSuggestion="onSuggestion" />
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