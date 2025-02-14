<template>
  <div class="my-3 flex flex-col items-center gap-[10px]">
    <!-- cover -->
    <div id="background-cover" class="inset-0 w-full h-[150px] rounded-[10px] border-4 border-border" />

    <!-- profile -->
    <Avatar class="size-[100px] mx-auto -mt-[65px] border-4 border-border">
      <AvatarImage :src="getProfile" class="object-cover" />
    </Avatar>
    <ChangeProfile :profiles="profiles" @onChangeProfile="onChangeProfile" />

    <!-- nickname -->
     <div class="flex items-center">
      <span class="text-[16px] text-primary">{{ getUsername }}</span>
     </div>

    <!-- bio -->
    <div class="relative">
      <Input
        :placeholder="getBio"
        class="text-muted-foreground bg-primary-foreground w-[350px] rounded-[10px] text-center"
        v-model.trim.lazy="bio"
      />
      <component
        v-if="bio.length >= 5"
        :is="Check"
        class="text-green-500 absolute right-2 inset-y-2 cursor-pointer"
        @click="onChangeBio"
      />
    </div>

  </div>
</template>

<script setup>
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useUserStore } from '@/store/user';
import { Input } from '@/components/ui/input';
import ChangeProfile from '@/components/ChangeProfile.vue';
import { useToast } from '@/components/ui/toast';
import { Check, Pencil } from 'lucide-vue-next';

//state
const profiles = ref(['/icons/icon-128.png', '/images/delulu.png', '/images/user.png', '/background/background-1.avif'])
const userStore = useUserStore()
const { toast } = useToast()
const bio = ref('')

//computed
const getProfile = computed(() => userStore.profile ? userStore.profile : '/icons/icon-128.png')
// const getNickName = computed(() => userStore.nickname ? userStore.nickname : 'Your nickname')
const getBio = computed(() => userStore.bio ? userStore.bio : 'Say something here...')
const getUsername = computed(() => userStore.user ? userStore.user?.email : '')

//function
const onChangeProfile = (payload) => {
  if (typeof payload !== 'string' || !payload) return
  userStore.profile = payload
  toast({
    title: 'Profile changed.',
    duration: 500
  })
}

const onChangeBio = () => {
  userStore.bio = bio.value
  bio.value = ''
}
</script>

<style scoped>
#background-cover {
  background-image: url('/background/background-1.avif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>