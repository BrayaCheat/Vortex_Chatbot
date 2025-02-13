export const useSessionStore = defineStore(
  "SessionStore",
  () => {
    const session = ref(null);

    const setSession = (data: any) => {
      if (!data) return;
      const storage = sessionStorage.getItem("SessionStore");
      storage && sessionStorage.removeItem("SessionStorage");
      session.value = data;
    };

    const clearSession = () => {
      session.value = null;
      sessionStorage.removeItem("SessionStore");
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
