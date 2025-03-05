<template>
  <Card class="w-full flex items-center justify-start border-none shadow-none bg-transparent">
    <Label
      id="enable-auto-clear"
      class="flex-1 text-muted-foreground"
    >
      Enable Automatic Clearing
    </Label>
    <Switch
      id="enable-auto-clear"
      :checked="settingStore.isEnableAutoClear"
      @click="onAutoClearChat"
    />
  </Card>
</template>

<script setup>
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { UseSettingStore } from '@/store/setting';
import { useToast } from '@/components/ui/toast';

//state
const settingStore = UseSettingStore()
const {toast} = useToast()

//computed
const toastMessage = computed(() => settingStore.isEnableAutoClear ? 'Enable auto clear' : 'Disable auto clear')

//function
const onAutoClearChat = () => {
  settingStore.isEnableAutoClear = !settingStore.isEnableAutoClear
  toast({
    description: toastMessage.value,
    duration: 3000,
    class: 'py-2 px-6'
  })
}
</script>