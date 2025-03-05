<template>
  <nav class="flex items-center top-0 inset-x-0 z-50 border-b">
    <h1 class="font-semibold text-xl py-3 pl-3">{{ new Date().toDateString() }}</h1>
    <ClearChat />
  </nav>
</template>

<script setup>
import SidePanel from '@/components/SidePanel.vue';
import { ChevronLeft } from 'lucide-vue-next';
import { useMemoryStore } from '@/store/memory';
import { useUserStore } from '@/store/user';
import ClearChat from '@/components/ClearChat.vue';

const userStore = useUserStore()

//computed
const isShowSideMenu = computed(() => route.path === '/')

const onGoBack = () => {
  router.push('/')
}
</script>
