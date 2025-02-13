<template>
    <div class="flex items-center justify-center flex-1 h-full m-3">
      <Card class="mx-auto grid w-[450px] gap-6 px-3 py-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">
            Login
          </h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <form @submit.prevent="onSignIn" class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required v-model.trim.lazy="credential.email" />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="/forgot-password" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required v-model.trim.lazy="credential.password" />
          </div>
          <Button type="submit" class="w-full">
            Login
          </Button>

          <Separator label="Or signin with" class="my-3" />
          <Button variant="outline" class="w-full">
            Login with Google
          </Button>
        </form>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline">
            Sign up
          </a>
        </div>
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
  const {email, password} = credential
  if(!email || !password){
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
    const {data, message} = response?.data
    userStore.setUser(data?.user)
    sessionStore.setSession(data?.session)
    clearCredential()
    userStore.isLoading = false
    return navigateTo('/')
  } catch (error) {
    userStore.isLoading = false
    const errorMessage = error?.response?.data?.message || 'An error occur.'
    toast({
      title: errorMessage,
      variant: 'destructive'
    })
  }
}

const clearCredential = () => {
  credential.email = ''
  credential.password = ''
}
</script>
