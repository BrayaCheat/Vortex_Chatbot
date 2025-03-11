<template>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
          <Avatar class="size-6 cursor-pointer">
            <AvatarImage :src="getProfile"/>
          </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="rounded-3xl w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem class="cursor-pointer">
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup>
import Logout from '@/components/Logout.vue';
import { useUserStore } from '@/store/user';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem } from '@/components/ui/dropdown-menu'

const userStore = useUserStore()
const getProfile = computed(() => userStore.profile ? userStore.profile : '/icons/icon-128.png')
</script>