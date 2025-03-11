<template>
  <div ref="chatContainer" class="md:mx-[300px] md:px-0 px-3">
    <div v-for="item, index in memoryList" :key="index" class="my-6">
      <Separator v-if="index % 6 === 0" :label="`${date}`" class="mb-6" />
      <ChatBoard :data="item" />
    </div>
  </div>
</template>

<script setup>
import ChatBoard from '@/components/ChatBoard.vue';
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
const date = computed(() => new Date().toLocaleString())

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
