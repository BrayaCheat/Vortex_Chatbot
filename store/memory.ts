interface MemoryItem {
  userId: string;
  prompt: string;
  role: string;
}

export const useMemoryStore = defineStore(
  "MemoryStore",
  () => {
    const memoryList = ref<MemoryItem[]>([]);
    const isLoading = ref<boolean>(false);
    const isError = ref<boolean>(false);

    const clearMemory = () => {
      memoryList.value = [];
      isError.value = false
      isLoading.value = false
    };

    return {
      //state
      memoryList,
      isLoading,
      isError,

      //methods
      clearMemory,
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);