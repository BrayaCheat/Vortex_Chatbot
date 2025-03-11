<template>
  <Card class="w-full flex items-center justify-start px-0 border-none shadow-none bg-transparent">
    <Badge variant="none" class="flex-1 text-sm border-none">Notification</Badge>
    <Switch :checked="settingStore.isEnableNotification" @click="toggleModel"/>
  </Card>
</template>

<script setup>
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { UseSettingStore } from '@/store/setting';
import { Badge } from '@/components/ui/badge';

const settingStore = UseSettingStore()

const toggleModel = () => settingStore.isEnableNotification = !settingStore.isEnableNotification
</script>