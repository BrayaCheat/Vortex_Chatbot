<template>
  <div class="flex items-center justify-center flex-1 h-full m-3">
    <Card class="mx-auto grid w-[450px] gap-6 px-3 py-12" id="login-form">
      <div class="flex items-center justify-center gap-1">
        <img src="public/icons/icon-256.png" class="rounded-full object-cover size-[40px]" />
        <h1 id="title" class="text-[20px]">VORTEX</h1>
      </div>
      <form @submit.prevent="onSignIn" class="grid gap-4">
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input type="email" placeholder="JohndDoe@example.com" required v-model.trim.lazy="credential.email"
            :disabled="userStore.isLoading" class="bg-primary-foreground rounded-[10px]"/>
        </div>
        <div class="grid gap-2">
          <div class="flex items-center">
            <Label for="password">Password</Label>
            <!-- <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a> -->
          </div>
          <Input type="password" placeholder="**********" required v-model.trim.lazy="credential.password"
            :disabled="userStore.isLoading" class="bg-primary-foreground rounded-[10px]"/>
        </div>
        <Button type="submit" class="w-full rounded-[10px]">
          <component v-if="userStore.isLoading" :is="Loader2" class="animate-spin" />
          <span v-else>Continue</span>
        </Button>

        <Separator label="Or signin with" class="my-3" />
        <Button variant="outline" class="w-full rounded-[10px] bg-primary-foreground">
          <img src="https://api.iconify.design/logos:google-icon.svg" alt="">
          <span>Login with Google</span>
        </Button>
      </form>
      <!-- <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline">
            Sign up
          </a>
        </div> -->
    </Card>
  </div>
</template>

<script setup>
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/toast';
import { useUserStore } from '@/store/user';
import { useSessionStore } from '@/store/session';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import axios from 'axios';
import { Loader2, Users } from 'lucide-vue-next';

// meta
definePageMeta({
  layout: 'auth'
})

//state
const { toast } = useToast()
const userStore = useUserStore()
const sessionStore = useSessionStore()
const credential = reactive({
  email: '',
  password: ''
})

//function
const onSignIn = async () => {
  userStore.isLoading = true
  const { email, password } = credential
  if (!email || !password) {
    toast({
      title: 'Missing credentials',
      description: 'Please provide both email and password',
      variant: 'destructive'
    })
    userStore.isLoading = false
    return
  }
  try {
    const response = await axios.post(`/api/auth/login`, { credential }, { timeout: 15000 })
    const { data } = response?.data
    userStore.user = data?.user
    sessionStore.setSession(data?.session)
    clearCredential()
    return navigateTo('/')
  } catch (error) {
    const errorMessage = error?.response?.data?.message || 'An error occur.'
    toast({
      title: errorMessage,
      variant: 'destructive'
    })
  } finally {
    userStore.isLoading = false
  }
}

const clearCredential = () => {
  credential.email = ''
  credential.password = ''
}
</script>

<style scoped>
/* #login-form{
    background-image: url('/icons/icon-256.png');
    background-repeat: no-repeat;
    background-size:  cover;
    background-position: center;
  } */
</style>
