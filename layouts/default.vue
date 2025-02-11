<template>
  <ClientOnly>
    <div class="flex flex-col h-screen overflow-hidden lg:w-[900px] w-full mx-auto">
      <NavBar />
      <main class="px-3 flex-1 overflow-auto">
        <NuxtPage />
      </main>
      <!-- suggestions -->
      <div v-if="!memoryStore.memoryList.length" class="flex items-center gap-3 overflow-x-auto m-3 md:grid md:grid-cols-4">
        <div v-for="item, index in suggestions" :key="index">
          <SuggestCard :data="item" @onSuggestion="onSuggestion" />
        </div>
      </div>
      <Prompt @onRequest="onRequest" />
    </div>
  </ClientOnly>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Prompt from '@/components/Prompt.vue';
import SuggestCard from '@/components/SuggestCard.vue';
import { useSuggestData } from '@/composables/SuggestData';
import { useMemoryStore } from '@/store/memory';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'


//state
const memoryStore = useMemoryStore()
const { suggestions } = useSuggestData()

//computed
const chatDate = computed(() => new Date().toLocaleString())

//function
const onRequest = async (payload) => {
  memoryStore.isLoading = true
  try {
    const userMessage = {
      userId: uuidv4(),
      prompt: payload,
      role: 'user',
      date: chatDate.value
    }
    memoryStore.setMemory(userMessage)
    const response = await axios.post(`/api/prompt`, userMessage, { timeout: 30000 })
    const data = response?.data?.data
    if (data) {
      const aiMessage = {
        userId: uuidv4(),
        prompt: data,
        role: 'ai',
        date: chatDate.value
      }
      memoryStore.setMemory(aiMessage)
    } else {
      const errorMessage = {
        userId: uuidv4(),
        prompt: "Sorry, I didn't receive a valid response.",
        role: 'ai',
        date: chatDate.value
      }
      memoryStore.setMemory(errorMessage)
    }
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.error('Request timed out');
    } else {
      console.error('Error occurred:', error.message || error);
    }
    const errorMessage = {
      userId: uuidv4(),
      prompt: "Sorry, there was an error processing your request.",
      role: 'ai',
      date: chatDate.value
    }
    memoryStore.setMemory(errorMessage)
  } finally {
    memoryStore.isLoading = false
  }
}

const onSuggestion = (payload) => {
  onRequest(payload?.prompt)
}
</script>
