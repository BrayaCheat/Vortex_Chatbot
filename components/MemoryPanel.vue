<template>
  <div class="p-3 flex flex-col gap-10 border-l w-[300px]">
    <!-- cover -->
    <div id="background-cover" class="inset-0 w-full h-[150px] rounded-[10px] border-4 border-border" />

    <!-- profile -->
    <div class="mx-auto -mt-[90px]">
      <Avatar class="size-[80px] mx-auto border-4 border-border">
        <AvatarImage :src="getProfile" class="object-cover" />
      </Avatar>
      <ChangeProfile :profiles="profiles" @onChangeProfile="onChangeProfile"/>
    </div>

    <!-- bio -->
    <!-- <div class="relative">
      <Input :placeholder="getBio" class="text-muted-foreground bg-primary-foreground rounded-[10px] text-center"
        v-model.trim.lazy="bio" />
      <component v-if="bio.length >= 5" :is="Check" class="text-green-500 absolute right-2 inset-y-2 cursor-pointer"
        @click="onChangeBio" />
    </div> -->

    <!-- total prompt -->
    <div class="flex flex-col gap-3">
      <div v-for="item in 4" :key="item">
        <Card class="bg-primary-foreground">
          <h1>Total Prompt</h1>
          {{ totalPrompt }}
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { useUserStore } from '@/store/user';
import ChangeProfile from '@/components/ChangeProfile.vue';
import { useToast } from '@/components/ui/toast';
import { profileList } from '@/utils/helper';
import { useMemoryStore } from '~/store/memory';

//state
const profiles = profileList()
const userStore = useUserStore()
const memoryStore = useMemoryStore()
const { toast } = useToast()
const bio = ref('')

//computed
const getProfile = computed(() => userStore.profile ? userStore.profile : '/icons/icon-128.png')
const getBio = computed(() => userStore.bio ? userStore.bio : 'Say something here...')
const getUsername = computed(() => userStore.user ? userStore.user?.email : '')
const totalPrompt = computed(() => memoryStore.memoryList.filter((item) => item.role !== 'user').length)

//function
const onChangeProfile = (payload) => {
  if (typeof payload !== 'string' || !payload) return
  userStore.profile = payload
  toast({
    title: 'Profile changed.',
    description: '',
    class: 'py-2 px-6',
    duration: 3000
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
