<template>
  <ClientOnly>
    <div class="flex h-screen overflow-hidden">
      <SidePanel />
      <div class="flex-1 h-screen flex flex-col">
        <NavBar />
        <main class="flex flex-col flex-1 h-screen overflow-auto p-3">
          <NuxtPage class=" rounded-3xl p-3" />
          <VitePwaManifest />
          <Loading v-if="isLoading" v-show="isShowPrompt" />
          <Retry v-if="isError" @onRetry="onRetry" :errorMessage="errorMessage" v-show="isShowPrompt" />
        </main>
        <Greeting v-if="!memoryStore.memoryList.length" />
        <Suggest @onSuggestion="onSuggestion" v-show="isShowPrompt" />
        <Prompt @onRequest="onRequest" v-show="isShowPrompt" />
      </div>
      <HistoryPanel />
      <!-- Notification toast -->
      <Toaster v-if="settingStore.isEnableNotification" />
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
import { useToast } from '~/components/ui/toast';
import { useVibrate } from '@vueuse/core';
import SidePanel from '@/components/SidePanel.vue';
import HistoryPanel from '@/components/HistoryPanel.vue';
import Greeting from '@/components/Greeting.vue';

//state
const memoryStore = useMemoryStore()
const settingStore = UseSettingStore()
const sessionStore = useSessionStore()
const errorMessage = ref('')
const route = useRoute()
const { toast } = useToast()
const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] })

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
    const message = response?.data?.message
    if (data && message) {
      vibrate()
      toast({
        title: `New message`,
        description: `Received at: ${new Date().toDateString()}`,
        class: 'py-2 px-6',
        duration: 3000
      })
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