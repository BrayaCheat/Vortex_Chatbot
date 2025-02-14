<template>
  <Dialog>
    <DialogTrigger as-child>
      <component :is="Camera"
        class="size-[30px] p-1.5 bg-primary-foreground rounded-full text-muted-foreground -mt-[35px] -mr-[60px] cursor-pointer border-2"
        @click="onChangeProfile" />
    </DialogTrigger>
    <DialogContent>
      <DialogTitle class="hidden" />
      <DialogDescription class="grid grid-cols-4 gap-3">
        <img v-for="item, index in profiles" :key="index"
          class="rounded-full border-2 border-border size-[70px] object-cover cursor-pointer" :src="item"
          @click="onChangeProfile(index)" />
      </DialogDescription>
      <DialogClose id="profileDialog" />
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Camera } from 'lucide-vue-next';

//state
const props = defineProps({
  profiles: {
    type: Array,
    required: true
  }
})
const emits = defineEmits(['onChangeProfile'])

//computed
const profiles = computed(() => props?.profiles || [])

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