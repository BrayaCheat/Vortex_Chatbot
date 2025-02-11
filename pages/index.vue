<template>
      <div ref="chatContainer">
        <Greeting v-if="!memoryList.length" />
        <!-- chat box -->
        <div v-for="item, index in memoryList" :key="index" class="my-6">
          <!-- chat date -->
          <Separator v-if="index % 8 === 0" :label="'New Message'" class="mb-6" />
          <!-- message box -->
          <ChatBoard :data="item" />
        </div>
        <Loading v-if="isLoading" />
      </div>
</template>

<script setup>
import ChatBoard from '@/components/ChatBoard.vue';
import Loading from '@/components/Loading.vue';
import Greeting from '@/components/Greeting.vue';
import { Separator } from '@/components/ui/separator';
import { useMemoryStore } from '@/store/memory';

const memoryStore = useMemoryStore()
const chatContainer = ref(null)

//computed
const isLoading = computed(() => memoryStore?.isLoading || false)
const memoryList = computed(() => memoryStore?.memoryList || [])

//life cycle
onMounted(() => {
  nextTick(() => {
    if(chatContainer.value){
      chatContainer.value.lastElementChild?.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

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
