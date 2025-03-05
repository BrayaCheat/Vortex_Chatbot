<template>
  <Card class="w-full flex items-center justify-start px-0 border-none shadow-none bg-transparent">
    <Tabs v-model="colorMode.preference" class="w-full">
      <TabsList class="w-full flex justify-between">
        <TabsTrigger value="light">
          <div class="flex items-center gap-2">
            <component :is="Sun" class="size-5 text-amber-500" />
            <p>Light Mode</p>
          </div>
        </TabsTrigger>
        <TabsTrigger value="dark">
          <div class="flex items-center gap-2">
            <component :is="Moon" class="size-5 text-blue-500" />
            <p>Dark Mode</p>
          </div>
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

const colorMode = useColorMode();
const settingStore = UseSettingStore();

watch(
  () => colorMode.preference,
  (newMode) => {
    settingStore.isEnableDarkMode = newMode === "dark";
  }
);
</script>
