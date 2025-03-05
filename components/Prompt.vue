<template>
  <div class="bg-primary-foreground p-3 sticky bottom-0 inset-x-0">
    <div class="rounded-3xl border flex flex-col pb-3">
      <form @submit.prevent="onSubmitPrompt">
        <div class="relative flex items-center">
          <Input
            type="text"
            v-model.trim.lazy="prompt"
            :placeholder="placeholder"
            required
            class="placeholder:text-[14px] text-[14px] border-none bg-transparent flex-1 ml-1 text-muted-foreground"
          />
          <Button
            v-if="isShowSubmitButton"
            type="submit"
            class="rounded-full size-10 mr-3 text-muted-foreground"
            variant="ghost"
            :disabled="disableInput"
          >
            <component :is="SendHorizonal" />
          </Button>
        </div>
      </form>

      <div class="flex items-center">
        <div v-for="item in promptOptions" :key="item.label" class="flex items-center h-5">
          <Button
            @click="item.action"
            variant="none"
            class="flex items-center gap-1 text-muted-foreground"
          >
            <component :is="item.icon" class="size-10 text-muted-foreground" />
            {{ item.label }}
          </Button>
          <Separator orientation="vertical"/>
        </div>
        <div class="text-muted-foreground flex-1 text-right mr-6 text-sm">
          {{ promptLength }} / 1000
        </div>
      </div>
    </div>

    <p class="text-sm text-muted-foreground mt-5 text-center">The vortex chatbot is responsible for understanding natural language and providing relevant responses.</p>
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { Earth, Link, SendHorizonal, Smile, Voicemail } from 'lucide-vue-next';
import { useMemoryStore } from '@/store/memory';
import DOMPurify from 'dompurify'
import { useToast } from '@/components/ui/toast/use-toast';
import {Separator} from '@/components/ui/separator';

const { toast } = useToast()
const prompt = ref('')
const emits = defineEmits(['onRequest'])
const memoryStore = useMemoryStore()
const placeholder = ref("Chat With Vortex...")
const promptOptions = ref([
  {
    label: 'Attact',
    icon: Link,
    action: () => alert('Featured is currently development')
  },
  {
    label: 'Voice Message',
    icon: Voicemail,
    action: () => alert('Featured is currently development')
  },
  {
    label: 'Browse Prompt',
    icon: Earth,
    action: () => alert('Featured is currently development')
  }
])

//computed
const isLoading = computed(() => memoryStore?.isLoading || false)
const isShowSubmitButton = computed(() => prompt.value.length > 0 && !isLoading.value)
const promptLength = computed(() => prompt.value.length || 0)
const disableInput = computed(() => prompt.value.length >= 1000)

//function
const onSubmitPrompt = () => {
  if (isLoading.value) return
  const sanitizedPrompt = DOMPurify.sanitize(prompt.value)
  if (sanitizedPrompt !== prompt.value) {
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