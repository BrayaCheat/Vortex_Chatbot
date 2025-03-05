<template>
  <div ref="chatContainer">
    <!-- <Greeting v-if="!memoryList.length" /> -->
    <!-- chat box -->
    <div v-for="item, index in memoryList" :key="index" class="my-6">
      <!-- chat date -->
      <!-- <Separator v-if="index % 8 === 0" :label="'New Message'" class="mb-6" /> -->
      <!-- message box -->
      <ChatBoard :data="item" />
    </div>
  </div>
</template>

<script setup>
import ChatBoard from '@/components/ChatBoard.vue';
import Greeting from '@/components/Greeting.vue';
import { useMemoryStore } from '@/store/memory';
import { UseSettingStore } from '@/store/setting';

//meta
definePageMeta({
  middleware: "auth"
})

//state
const memoryStore = useMemoryStore()
const settingStore = UseSettingStore()
const chatContainer = ref(null)

//computed
const memoryList = computed(() => memoryStore?.memoryList || [])

//function
const onScroll = () => {
  nextTick(() => {
    if (chatContainer.value) {
      chatContainer.value.lastElementChild?.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

//life cycle
onMounted(() => {
  onScroll()
})

onUpdated(() => {
  onScroll()
});

//watcher
watch(
  () => memoryStore.memoryList.length,
  () => {
    onScroll()
  }, { immediate: true, deep: true }
);

watch([() => settingStore.isEnableAutoClear, () => memoryStore.memoryList], ([isEnable, memoryList]) => {
  if (isEnable && memoryList.length > 10) {
    memoryStore.clearMemory()
  }
}, { immediate: true, deep: true })
</script>
