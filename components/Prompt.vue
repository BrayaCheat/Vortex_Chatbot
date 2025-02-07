<template>
  <form @submit.prevent="onSubmitPrompt" class="relative">
    <Input type="text" placeholder="Enter a prompt for OHLALA" v-model.trim.lazy="prompt" required tabindex="0"
      autofocus/>
    <Button v-if="isShowSubmitButton" type="submit" class="absolute right-0 inset-y-3 text-muted-foreground px-3"
      variant="ghost" size="lg">
      <component :is="SendHorizonal" />
    </Button>
  </form>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { SendHorizonal } from 'lucide-vue-next';

const prompt = ref('')
const emits = defineEmits(['onRequest'])
const props = defineProps({
  data: {
    type: Boolean,
    required: true
  }
})

//computed
const isShowSubmitButton = computed(() => prompt.value.length > 0)
const isLoading = computed(() => props?.data)

//function
const onSubmitPrompt = () => {
  if(isLoading.value) return
  emits('onRequest', prompt.value)
  prompt.value = ''
}
</script>