<template>
  <Card class="flex items-center p-1 rounded-3xl">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button class="flex items-center flex-1 cursor-pointer p-1" variant="none">
          <Avatar class="size-[30px]">
            <AvatarImage :src="getProfile"/>
          </Avatar>
          <!-- <span class="text-[14px] text-muted-foreground">{{ getUsername }}</span> -->
          <!-- <div class="flex-1 flex items-center justify-end pr-3">
            <component :is="Ellipsis" class="size-[30px] text-muted-foreground" />
          </div> -->
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="rounded-[10px] w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem
            v-for="item, index in links"
            :key="index"
            class="cursor-pointer"
          >
            <NavigateButton :data="item"/>
          </DropdownMenuItem>
          <Separator class="my-1"/>
          <DropdownMenuItem class="cursor-pointer">
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </Card>
</template>

<script setup>
import { Card } from '@/components/ui/card'
import Logout from '@/components/Logout.vue';
import NavigateButton from '@/components/NavigateButton.vue';
import { useUserStore } from '@/store/user';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Ellipsis, User } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

//state
const links = reactive([
  {
    label: 'View profile',
    icon: User,
    path: '/profile'
  }
])

//computed
const userStore = useUserStore()
const getProfile = computed(() => userStore.profile ? userStore.profile : '/icons/icon-128.png')
const getUsername = computed(() => userStore.user?.email || '')
</script>