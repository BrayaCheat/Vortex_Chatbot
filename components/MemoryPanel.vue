<template>
  <div class="border-l flex flex-col justify-between overflow-auto h-screen w-[300px]">
      <div class="flex flex-col gap-6 my-3 px-3 flex-1 overflow-auto">
        <div v-for="chat in chats" :key="chat.id">
          <Card class="p-3 bg-primary-foreground">
            <h2 class="font-semibold">{{ chat.user }}</h2>
            <p class="text-sm text-gray-600">{{ chat.message }}</p>
          </Card>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const chats = ref([
  { id: 1, user: "Alice", message: "Hey! How's it going?" },
  { id: 2, user: "Bob", message: "Just finished work, what about you?" },
  { id: 3, user: "Charlie", message: "Anyone tried the new Vue update?" },
  { id: 4, user: "David", message: "I'm working on a project with Tailwind." },
  { id: 5, user: "Eve", message: "Planning a trip next weekend. Any ideas?" },
  { id: 6, user: "Frank", message: "The latest JS framework looks interesting!" },
  { id: 7, user: "Grace", message: "What’s the best way to structure Pinia stores?" },
  { id: 8, user: "Hannah", message: "Does anyone know a good UI library for Vue?" },
  { id: 9, user: "Isaac", message: "Finally deployed my app today! 🎉" },
  { id: 10, user: "Jack", message: "Looking for Vue job opportunities. Any tips?" },
]);
</script>
