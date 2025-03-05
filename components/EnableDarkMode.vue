<!-- <template>
  <Card class="w-full flex items-center justify-start px-0 border-none shadow-none bg-transparent">
    <Label class="flex-1 text-muted-foreground">{{ toggleTitle }}</Label>
    <Switch :checked="settingStore.isEnableDarkMode" @click="toggleDarkMode">
      <template #thumb>
        <component :is="toggleIcon" class="size-5 p-0.5 text-amber-500"/>
      </template>
    </Switch>
  </Card>
</template>

<script setup>
import { Label } from '@/components/ui/label';
import { Moon, Sun } from 'lucide-vue-next';
import { Switch } from '@/components/ui/switch';
import { UseSettingStore } from '@/store/setting';

//state
const colorMode = useColorMode()
const settingStore = UseSettingStore()

//computed
const toggleIcon = computed(() => colorMode.preference === 'dark' ? Sun : Moon)
const toggleTitle = computed(() => colorMode.preference === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode')

//function
const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  settingStore.isEnableDarkMode = colorMode.preference === 'dark' ? true : false
}
</script> -->

<template>
  <Card class="w-full flex items-center justify-start px-0 border-none shadow-none bg-transparent">
    <Tabs v-model="colorMode.preference" class="w-full">
      <TabsList class="w-full flex justify-between">
        <TabsTrigger value="light" class="flex items-center gap-2">
          <Sun class="size-5 text-amber-500"/>
          Light Mode
        </TabsTrigger>
        <TabsTrigger value="dark" class="flex items-center gap-2">
          <Moon class="size-5 text-blue-500"/>
          Dark Mode
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </Card>
</template>

<script setup>
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Sun, Moon } from "lucide-vue-next";
import { UseSettingStore } from "@/store/setting";

// State
const colorMode = useColorMode();
const settingStore = UseSettingStore();

// Watch for changes in tab selection
watch(
  () => colorMode.preference,
  (newMode) => {
    settingStore.isEnableDarkMode = newMode === "dark";
  }
);
</script>
