<template>
  <Button variant="destructive" @click="onSignOut" class="w-full flex items-center justify-start">
    <component :is="LogOut" class="mr-3" />
    <span>Logout</span>
  </Button>
</template>

<script setup>
import { LogOut } from 'lucide-vue-next';
import { useSessionStore } from '@/store/session';
import { useUserStore } from '@/store/user';

const authStore = useUserStore()
const sessionStore = useSessionStore()

const onSignOut = () => {
  authStore.clearUser()
  sessionStore.clearSession()
  return navigateTo('/login')
}
</script>
