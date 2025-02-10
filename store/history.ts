interface HistoryItem {
  prompt: string;
}

export const useHistoryStore = defineStore(
  "HistoryStore",
  () => {
    const history = ref<HistoryItem[]>([]);

    const setHistory = (data: HistoryItem) => {
      if (!data) return;
      history.value.push(data);
    };

    const getHistory = () => {
      return history.value;
    };

    const clearHistory = () => {
      history.value = [];
    };

    return {
      //state
      history,

      //methods
      setHistory,
      getHistory,
      clearHistory,
    };
  },
  {
    persist: true,
  }
);
