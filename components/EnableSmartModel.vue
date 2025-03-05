<template>
  <Card class="w-full flex items-center justify-start px-0 border-none shadow-none bg-transparent">
    <Label class="flex-1 text-muted-foreground">Gemini Flash Thinking</Label>
    <Switch :checked="settingStore.isEnableSmartModel" @click="toggleModel"/>
  </Card>
</template>

<script setup>
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { UseSettingStore } from '@/store/setting';

//state
const settingStore = UseSettingStore()

//functions
const toggleModel = () => {
  settingStore.isEnableSmartModel = !settingStore.isEnableSmartModel
}

</script>