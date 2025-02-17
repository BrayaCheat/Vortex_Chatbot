export const UseSettingStore = defineStore(
  "SettingStore",
  () => {
    const isEnableAutoClear = ref<boolean>(false);
    const isEnableDarkMode = ref<boolean>(false);

    return {
      isEnableAutoClear,
      isEnableDarkMode
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
