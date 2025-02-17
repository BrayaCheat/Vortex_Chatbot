<template>
  <Button
    variant="none"
    @click="onSignOut"
    class="p-0 text-muted-foreground flex-1 flex items-center justify-start"
    size="md"
  >
    <component :is="LogOut"/>
    <span>Logout</span>
  </Button>
</template>

<script setup>
import { LogOut } from 'lucide-vue-next';
import { useSessionStore } from '@/store/session';
import { useUserStore } from '@/store/user';

const userStore = useUserStore()
const sessionStore = useSessionStore()

const onSignOut = () => {
  userStore.clearUser()
  sessionStore.clearSession()

  return navigateTo('/login')
}
</script>
