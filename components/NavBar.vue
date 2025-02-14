<template>
  <nav
    class="flex items-center px-3 md:py-6 py-3 sticky top-0 inset-x-0 bg-inherit z-50 border-b md:shadow-none shadow">
    <div>
      <Sheet v-if="isShowSideMenu">
        <SheetTrigger as-child>
          <component :is="Menu" class="text-muted-foreground size-[35px] cursor-pointer p-1" />
        </SheetTrigger>
        <SheetContent class="flex flex-col w-[270px]" side="left">
          <SheetHeader class="hidden" />
          <SheetTitle class="hidden" />
          <h1 id="title">BRAYA-CHATBOT</h1>
          <SheetDescription class="flex-1 flex flex-col gap-3">
            <ThemeToggle />
            <ClearChat v-if="isShowClearButton" />
            <DonateMe />
          </SheetDescription>
          <Logout />
          <span class="text-[14px]">Develop by: <span class="text-green-500">#Braya Cheat#</span></span>
        </SheetContent>
      </Sheet>
      <component v-else :is="ChevronLeft" @click="onGoBack" class="cursor-pointer size-[35px] p-1 text-muted-foreground"/>
    </div>
    <div class="text-center flex-1">
      <h1 class="font-semibold text-[18px]" id="title">BRAYA-CHATBOT</h1>
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
import ThemeToggle from '@/components/ThemeToggle.vue';
import ClearChat from '@/components/ClearChat.vue';
import DonateMe from '@/components/DonateMe.vue';
import Logout from '@/components/Logout.vue';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ChevronLeft, Menu } from 'lucide-vue-next';
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

