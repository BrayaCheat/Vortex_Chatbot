export const UseSettingStore = defineStore(
  "SettingStore",
  () => {
    const isEnableAutoClear = ref<boolean>(false);
    const isEnableDarkMode = ref<boolean>(false);
    const isEnableSmartModel = ref<boolean>(false);
    const isEnableNotification = ref<boolean>(true);
    const isOpenHistoryPanel = ref<boolean>(false)

    return {
      isEnableAutoClear,
      isEnableDarkMode,
      isEnableSmartModel,
      isEnableNotification,
      isOpenHistoryPanel
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
