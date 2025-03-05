<template>
  <div class="border-l flex flex-col justify-between overflow-auto h-screen w-[300px]">
    <div class="flex flex-col gap-3">
      <h1 class="font-semibold text-xl py-3 pl-3 border-b">Recent Chat</h1>

      <div class="flex flex-col gap-6 mb-3 px-3">
        <div v-for="card in 10" :key="card">
          <Card>
            Lorem ipsum dolor sit amet.
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>