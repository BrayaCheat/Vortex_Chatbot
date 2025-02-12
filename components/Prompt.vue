<template>
  <form @submit.prevent="onSubmitPrompt" class="absolute bottom-0 inset-x-0">
    <div class="relative w-full flex items-center flex-1 pb-10 pt-5 rounded-t-3xl backdrop-blur-xl">
      <Input
        id="search"
        type="text"
        v-model.trim.lazy="prompt"
        :placeholder="placeholder"
        required
        class="placeholder:text-[14px] border-none bg-transparent flex-1 ml-3"
      />
      <Button
        v-if="isShowSubmitButton"
        type="submit" c
        class="rounded-full size-10 mr-3"
        variant="default"
      >
        <component :is="SendHorizonal" />
      </Button>
    </div>
  </form>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { SendHorizonal, Smile } from 'lucide-vue-next';
import { useMemoryStore } from '@/store/memory';
import DOMPurify from 'dompurify'
import { useToast } from '@/components/ui/toast/use-toast';

const {toast} = useToast()
const prompt = ref('')
const emits = defineEmits(['onRequest'])
const memoryStore = useMemoryStore()
const placeholder = ref("What's on your mind?")

//computed
const isLoading = computed(() => memoryStore?.isLoading || false)
const isShowSubmitButton = computed(() => prompt.value.length > 0 && !isLoading.value)

//function
const onSubmitPrompt = () => {
  if (isLoading.value) return
  const sanitizedPrompt = DOMPurify.sanitize(prompt.value)
  if(sanitizedPrompt !== prompt.value){
    toast({
      title: 'Warning',
      description: 'Potential XSS attack detected. Prompt sanitized.',
      variant: 'destructive'
    })
    return
  }
  emits('onRequest', prompt.value)
  prompt.value = ''
}
</script>