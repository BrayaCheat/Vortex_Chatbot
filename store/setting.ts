export const UseSettingStore = defineStore(
  "SettingStore",
  () => {
    const isEnableAutoClear = ref<boolean>(false);
    const isEnableDarkMode = ref<boolean>(false);
    const isEnableSmartModel = ref<boolean>(false);
    const isEnableNotification = ref<boolean>(true);

    return {
      isEnableAutoClear,
      isEnableDarkMode,
      isEnableSmartModel,
      isEnableNotification,
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
