<template>
  <ClientOnly>
    <div class="flex flex-col h-screen overflow-hidden lg:w-[900px] w-full mx-auto relative">
      <NavBar />
      <main class="px-3 flex-1 flex flex-col overflow-auto">
        <VitePwaManifest />
        <NuxtPage />
        <div v-if="!memoryStore.memoryList.length" class="flex-1" />
        <Suggest @onSuggestion="onSuggestion" v-show="isShowPrompt" />
        <Loading v-if="isLoading" />
        <Retry v-if="isError" @onRetry="onRetry" :errorMessage="errorMessage" />
        <Toaster />
      </main>
      <!-- prompt -->
      <Prompt @onRequest="onRequest" v-show="isShowPrompt" />
    </div>
  </ClientOnly>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import Prompt from '@/components/Prompt.vue';
import Suggest from '@/components/Suggest.vue';
import Retry from '@/components/Retry.vue';
import Loading from '@/components/Loading.vue';
import { useMemoryStore } from '@/store/memory';
import { useSessionStore } from '@/store/session';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import Toaster from '@/components/ui/toast/Toaster.vue';
import { UseSettingStore } from '@/store/setting';

//state
const memoryStore = useMemoryStore()
const settingStore = UseSettingStore()
const sessionStore = useSessionStore()
const errorMessage = ref('')
const route = useRoute()

//computed
const chatDate = computed(() => new Date().toLocaleString())
const isError = computed(() => memoryStore?.isError || false)
const isLoading = computed(() => memoryStore?.isLoading || false)
const accessToken = computed(() => sessionStore.session?.access_token || '')
const refreshToken = computed(() => sessionStore.session?.refresh_token || '')
const isShowPrompt = computed(() => route.path === '/')
const model = computed(() => settingStore.isEnableSmartModel ? 'enable' : 'disable')

//function
const onRequest = async (payload) => {
  memoryStore.isLoading = true
  memoryStore.isError = false
  try {
    const userMessage = {
      userId: uuidv4(),
      prompt: payload,
      role: 'user',
      date: chatDate.value
    }
    memoryStore.memoryList.push(userMessage)
    const response = await axios.post(`/api/prompt`, userMessage,
      {
        timeout: 60000,
        headers: {
          'access_token': accessToken.value,
          'refresh_token': refreshToken.value,
          'model': model.value
        }
      })
    const data = response?.data?.data
    if (data) {
      const aiMessage = {
        userId: uuidv4(),
        prompt: data,
        role: 'ai',
        date: chatDate.value
      }
      memoryStore.memoryList.push(aiMessage)
    } else {
      const errorMessage = {
        userId: uuidv4(),
        prompt: "Sorry, I didn't receive a valid response.",
        role: 'ai',
        date: chatDate.value
      }
      memoryStore.memoryList.push(errorMessage)
    }
  } catch (error) {
    errorMessage.value = error?.response?.data?.statusMessage
    memoryStore.isError = true
    console.log(error)
  } finally {
    memoryStore.isLoading = false
  }
}

const onSuggestion = (payload) => {
  onRequest(payload)
}

const onRetry = (payload) => {
  onRequest(payload)
}
</script>
