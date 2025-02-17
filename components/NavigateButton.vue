<template>
  <Button variant="none" class="p-0 text-muted-foreground flex-1 flex items-center justify-start" size="md" as-child>
    <NuxtLink :to="path" class="flex items-center">
      <component :is="icon" />
      <span>{{ label }}</span>
    </NuxtLink>
  </Button>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

//computed
const icon = computed(() => props.data?.icon || '')
const label = computed(() => props.data?.label || '')
const path = computed(() => props.data?.path || '/')
</script>