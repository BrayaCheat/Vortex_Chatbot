import { useSessionStore } from "@/store/session";
export default defineNuxtRouteMiddleware(async (to, from) => {
  const sessionStore = useSessionStore();
  if (!sessionStore.session) {
    return navigateTo("/login");
  }
  return
});
