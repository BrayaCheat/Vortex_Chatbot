<template>
  <Card
    class="w-full flex items-center justify-start border-none shadow-none bg-transparent"
    @click="onAutoClearChat">
    <Label
      for="toggleClearAuto"
      class="flex-1 text-muted-foreground cursor-pointer">
        Enable Automatic Clearing
    </Label>
    <Switch
      id="toggleClearAuto"
      :checked="settingStore.isEnableAutoClear"
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
  console.log("Toggle client side: ", settingStore.isEnableAutoClear)
}
</script>