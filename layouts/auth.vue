<template>
  <ClientOnly>
    <div class="relative h-screen">
      <NuxtPage/>
      <Toaster/>
    </div>
  </ClientOnly>
</template>

<script setup>
  import { Toaster } from '@/components/ui/toast';
  import { useSessionStore } from '@/store/session';

  const sessionStore = useSessionStore()
  //watcher
  watch(() => sessionStore.session, (val) => {
    if(val){
      return navigateTo('/')
    }
  }, {immediate: true, deep: true})
</script>

