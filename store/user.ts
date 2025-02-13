export const useUserStore = defineStore(
  "UserStore",
  () => {
    const user = ref(null);
    const isLoading = ref<boolean>(false);
    const isError = ref<boolean>(false);

    const setUser = (data: any) => {
      if(!data) return
      user.value = data
    }

    const clearUser = () => {
      user.value = null
    }

    return {
      //state
      user,
      isLoading,
      isError,

      //methods
      setUser,
      clearUser
    };
  },
  {
    persist: {
      storage: localStorage,
    },
  }
);
