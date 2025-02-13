export const useSessionStore = defineStore(
  "SessionStore",
  () => {
    const session = ref(null);

    const setSession = (data: any) => {
      if (!data) return;
      session.value = data;
    };

    const clearSession = () => {
      session.value = null;
    };

    return {
      //state
      session,

      //methods
      setSession,
      clearSession,
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  }
);
