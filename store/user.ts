export const useUserStore = defineStore(
  "UserStore",
  () => {
    const user = ref<Object>({});
    const isLoading = ref<boolean>(false);
    const isError = ref<boolean>(false);
    const nickname = ref<string>('')
    const bio = ref<string>('')
    const profile = ref<string>('')

    const clearUser = () => {
      user.value = {}
      nickname.value = ''
      bio.value = ''
      profile.value = ''
    }

    return {
      //state
      user,
      isLoading,
      isError,
      nickname,
      bio,
      profile,

      //methods
      clearUser
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
