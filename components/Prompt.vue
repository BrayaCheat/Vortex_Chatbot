<template>
  <form @submit.prevent="onSubmitPrompt" class="py-5 px-3 rounded-t-3xl">
    <div class="relative flex items-center rounded-3xl bg-primary-foreground border">
      <Input
        id="search"
        type="text"
        v-model.trim.lazy="prompt"
        :placeholder="placeholder"
        required
        class="placeholder:text-[14px] text-[14px] border-none bg-transparent flex-1 ml-3 text-muted-foreground"
      />
      <Button
        v-if="isShowSubmitButton"
        type="submit" c
        class="rounded-full size-10 mr-3 text-muted-foreground"
        variant="ghost"
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
const placeholder = ref("Message here...")

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