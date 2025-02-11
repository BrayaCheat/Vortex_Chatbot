<template>
  <form @submit.prevent="onSubmitPrompt" class="relative pb-10 mx-3">
    <Input
      type="text"
      v-model.trim.lazy="prompt"
      :placeholder="placeholder"
      required
      class="rounded-[10px] placeholder:text-[14px]"
    />
    <Button
      v-if="isShowSubmitButton"
      type="submit"
      class="absolute right-0 inset-y-0 text-muted-foreground px-3"
      variant="ghost" size="lg">
      <component :is="SendHorizonal" />
    </Button>
  </form>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { SendHorizonal } from 'lucide-vue-next';
import { useMemoryStore } from '@/store/memory';

const prompt = ref('')
const emits = defineEmits(['onRequest'])
const memoryStore = useMemoryStore()
const placeholder = ref("What's on your mind?")

//computed
const isLoading = computed(() => memoryStore?.isLoading || false)
const isShowSubmitButton = computed(() => prompt.value.length > 0 && !isLoading.value)

//function
const onSubmitPrompt = () => {
  if(isLoading.value) return
  emits('onRequest', prompt.value)
  prompt.value = ''
}
</script>