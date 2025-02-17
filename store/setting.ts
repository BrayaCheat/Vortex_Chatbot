import { useMemoryStore } from "@/store/memory";

export const UseSettingStore = defineStore(
  "SettingStore",
  () => {
    const isEnableAutoClear = ref<boolean>(false);

    return {
      isEnableAutoClear,
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
