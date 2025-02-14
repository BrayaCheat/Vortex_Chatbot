export const useUserStore = defineStore(
  "UserStore",
  () => {
    const user = ref<Object>({});
    const isLoading = ref<boolean>(false);
    const isError = ref<boolean>(false);
    const nickname = ref<string>('')
    const bio = ref<string>('')
    const profile = ref<string>('')

    return {
      //state
      user,
      isLoading,
      isError,
      nickname,
      bio,
      profile
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
