<template>
  <nav
    class="flex items-center px-3 md:py-6 py-1 sticky top-0 inset-x-0 bg-inherit z-50 border-b md:shadow-none shadow">
    <!-- side-panel -->
    <div>
      <SidePanel v-if="isShowSideMenu" />
      <component v-else :is="ChevronLeft" @click="onGoBack"
        class="cursor-pointer size-[35px] p-1 text-muted-foreground" />
    </div>
    <!-- title -->
    <div class="text-center flex-1">
      <h1 class="font-semibold md:text-[18px] text-[14px]">VORTEX</h1>
    </div>
    <!-- profile -->
    <NuxtLink to="/profile" class="flex items-center">
      <Avatar>
        <AvatarImage :src="getProfile" />
      </Avatar>
    </NuxtLink>
  </nav>
</template>

<script setup>
import SidePanel from '@/components/SidePanel.vue';
import { ChevronLeft } from 'lucide-vue-next';
import { useMemoryStore } from '@/store/memory';
import { useUserStore } from '@/store/user';

const userStore = useUserStore()
const memoryStore = useMemoryStore()
const router = useRouter()
const route = useRoute()

//computed
const getProfile = computed(() => userStore.profile ? userStore.profile : '/icons/icon-128.png')
const isShowClearButton = computed(() => memoryStore.memoryList.length)
const isShowSideMenu = computed(() => route.path === '/')

const onGoBack = () => {
  router.push('/')
}
</script>
