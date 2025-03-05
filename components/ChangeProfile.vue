<template>
  <Dialog>
    <DialogTrigger as-child>
      <component :is="Camera"
        class="size-[30px] p-1.5 bg-primary-foreground rounded-full text-muted-foreground -mt-[35px] -mr-[30px] cursor-pointer border-2"
        @click="onChangeProfile" />
    </DialogTrigger>
    <DialogContent>
      <DialogTitle class="hidden" />
      <DialogDescription class="grid grid-cols-4 gap-3">
        <div
          v-for="item, index in profiles"
          :key="index"
          class="flex flex-col items-center"
        >
          <img
            :class="`rounded-full border-2 size-[70px] object-cover cursor-pointer ${item === selectedProfile ? 'border-green-500' : 'border-border hover:border-primary'}`"
            :src="item"
            :alt="item"
            @click="onChangeProfile(index)"
          />
          <span v-if="item === selectedProfile" class="text-green-500 text-[12px]">Selected</span>
        </div>
      </DialogDescription>
      <DialogClose id="profileDialog" />
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Camera } from 'lucide-vue-next';
import { useUserStore } from '@/store/user';

//state
const userStore = useUserStore()
const props = defineProps({
  profiles: {
    type: Array,
    required: true
  }
})
const emits = defineEmits(['onChangeProfile'])

//computed
const profiles = computed(() => props?.profiles || [])
const selectedProfile = computed(() =>
  profiles.value.filter(profile => profile === userStore.profile).toString()
)

//function
const onChangeProfile = (index) => {
  emits('onChangeProfile', profiles.value[index])
  closeProfileDialog()
}

const closeProfileDialog = () => {
  const close = document.getElementById('profileDialog')
  close?.click()
}
</script>