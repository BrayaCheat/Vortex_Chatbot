<template>
  <ClientOnly>
    <div class="flex flex-col h-[90vh]">
      <div class="flex-1 overflow-auto" ref="chatContainer">

        <Greeting v-if="!memoryStore.memoryList.length" />

        <!-- chat box -->
        <div v-for="item, index in memoryStore.memoryList" :key="index" class="my-6">

          <!-- chat date -->
          <Separator v-if="index % 8 === 0" :label="'New Message'" class="mb-6" />

          <!-- message box -->
          <ChatBoard :data="item" />

        </div>
        <Loading v-if="isLoading" />
      </div>

      <!-- prompt field -->
      <Prompt @onRequest="onRequest" :data="isLoading" class="pt-6" />
    </div>
  </ClientOnly>
</template>

<script setup>
import axios from 'axios';
import Prompt from '@/components/Prompt.vue';
import ChatBoard from '@/components/ChatBoard.vue';
import Loading from '@/components/Loading.vue';
import Greeting from '@/components/Greeting.vue';
import { v4 as uuidv4 } from 'uuid'
import { useMemoryStore } from '@/store/memory';
import { Separator } from '@/components/ui/separator';
import { useHistoryStore } from '@/store/history';

const isLoading = ref(false)
const chatContainer = ref(null)
const memoryStore = useMemoryStore()
const historyStore = useHistoryStore()

//computed
const chatDate = computed(() => new Date().toLocaleString())

//function
const onRequest = async (payload) => {
  try {
    var recent = {}
    isLoading.value = true
    const userMessage = {
      userId: uuidv4(),
      prompt: payload,
      role: 'user',
      date: chatDate.value
    }
    memoryStore.setMemory(userMessage)
    recent = {user: userMessage}
    const response = await axios.post(`/api/prompt`, userMessage, { timeout: 30000 })
    const data = response?.data?.data
    // console.log("data: ", data)
    if (data) {
      const aiMessage = {
        userId: uuidv4(),
        // prompt: data.candidates[0]?.content?.parts[0]?.text || "No response",
        prompt: data,
        role: 'ai',
        date: chatDate.value
      }
      memoryStore.setMemory(aiMessage)
      recent = {ai: aiMessage}
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
    historyStore.setHistory(recent)
    isLoading.value = false
  }
}

//life cycle
onUpdated(() => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.lastElementChild?.scrollIntoView({ behavior: 'smooth' })
    }
  });
});

//watcher
watch(
  () => memoryStore.memoryList.length,
  () => {
    nextTick(() => {
      chatContainer.value?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    });
  }
);
</script>
