<template>
  <ClientOnly>
    <div class="flex flex-col h-screen overflow-hidden lg:w-[900px] w-full mx-auto relative">
      <NavBar />
      <main class="px-3 flex-1 flex flex-col overflow-auto">
        <VitePwaManifest />
        <NuxtPage />
        <Suggest @onSuggestion="onSuggestion"/>
        <Toaster />
      </main>
      <!-- prompt -->
      <Prompt @onRequest="onRequest" />
    </div>
  </ClientOnly>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Prompt from '@/components/Prompt.vue';
import Suggest from '@/components/Suggest.vue';
import { useMemoryStore } from '@/store/memory';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import Toaster from '@/components/ui/toast/Toaster.vue';

//state
const memoryStore = useMemoryStore()


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
