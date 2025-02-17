<template>
  <Card class="w-full flex items-center justify-start border-none shadow-none bg-transparent">
    <Label class="flex-1 text-muted-foreground">
      Enable Automatic Clearing
    </Label>
    <Switch
      :checked="settingStore.isEnableAutoClear"
      @click="onAutoClearChat"
    />
  </Card>
</template>

<script setup>
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { UseSettingStore } from '@/store/setting';

//state
const settingStore = UseSettingStore()

//function
const onAutoClearChat = () => {
  settingStore.isEnableAutoClear = !settingStore.isEnableAutoClear
}
</script>