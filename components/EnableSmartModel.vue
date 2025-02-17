<template>
  <Card class="w-full flex items-center justify-start px-0 border-none shadow-none bg-transparent" @click="toggleModel">
    <Label for="enableSmartModel" class="flex-1 text-muted-foreground cursor-pointer">Enable Smart Model</Label>
    <Switch id="enableSmartModel" :checked="settingStore.isEnableSmartModel" />
  </Card>
</template>

<script setup>
import { Label } from '@/components/ui/label';
import { Moon, Sun } from 'lucide-vue-next';
import { Switch } from '@/components/ui/switch';
import { UseSettingStore } from '@/store/setting';

//state
const settingStore = UseSettingStore()

//functions
const toggleModel = () => {
  settingStore.isEnableSmartModel = !settingStore.isEnableSmartModel
}

</script>