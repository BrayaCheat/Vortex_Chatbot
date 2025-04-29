<template>
  <div class="px-3 pb-3 z-50">
    <div class="rounded-3xl border border-border flex flex-col shadow-[0_-5px_10px_rgba(0,0,0,0.1)]">
      <form @submit.prevent="onSubmitPrompt">
        <div class="relative flex items-center">
          <Input type="text" v-model.trim.lazy="prompt" :placeholder="placeholder" required
            class="placeholder:text-[15px] text-[15px] border-none bg-transparent flex-1 ml-1 text-muted-foreground cursor-pointer" />
          <Button v-if="isShowSubmitButton" type="submit" class="rounded-full size-10 mr-3 text-muted-foreground"
            variant="ghost" :disabled="disableInput">
            <component :is="SendHorizonal" />
          </Button>
        </div>
      </form>

      <!-- <div class="flex flex-wrap items-center py-3 bg-primary-foreground rounded-b-3xl">
        <div v-for="item in promptOptions" :key="item.label"
          class="flex items-center h-5 text-muted-foreground hover:text-primary">
          <Button @click="item.action" variant="none" class="flex items-center gap-1">
            <component :is="item.icon" class="size-10" />
            <p>{{ item.label }}</p>
          </Button>
          <Separator orientation="vertical" />
        </div>
        <div class="flex-1 flex items-center justify-end pr-3">
          <Badge variant="secondary">
            {{ promptLength }} / 1000
          </Badge>
        </div>
      </div> -->
    </div>

    <!-- <p class="text-sm text-muted-foreground mt-3 text-center">Vortex can make mistakes. Check important info.</p> -->
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input';
import { Earth, Link, SendHorizonal, Smile, Voicemail } from 'lucide-vue-next';
import { useMemoryStore } from '@/store/memory';
import DOMPurify from 'dompurify'
import { useToast } from '@/components/ui/toast/use-toast';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

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