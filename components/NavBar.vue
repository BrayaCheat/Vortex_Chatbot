<template>
  <nav
    class="flex items-center px-3 md:py-6 py-3 sticky top-0 inset-x-0 bg-inherit z-50 border-b md:shadow-none shadow">
    <div>
      <SidePanel v-if="isShowSideMenu" />
      <component v-else :is="ChevronLeft" @click="onGoBack"
        class="cursor-pointer size-[35px] p-1 text-muted-foreground" />
    </div>
    <div class="text-center flex-1">
      <h1 class="font-semibold text-[18px]">VORTEX</h1>
    </div>
    <div>
      <NuxtLink to="/profile">
        <Avatar>
          <AvatarImage :src="getProfile" />
        </Avatar>
      </NuxtLink>
    </div>
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
