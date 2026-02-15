<script setup lang="ts">
const phone = defineModel<string>('phone', { required: true })
const body = defineModel<string>('body', { required: true })
</script>

<template>
  <h2 class="text-lg font-semibold tracking-tight">SMS</h2>
  <div class="space-y-2">
    <Label for="smsPhone">Phone number</Label>
    <Input id="smsPhone" v-model="phone" type="tel" placeholder="+1 234 567890" />
  </div>
  <div class="space-y-2">
    <Label for="smsBody">Message (optional)</Label>
    <Input id="smsBody" v-model="body" placeholder="Pre-filled message" />
  </div>
</template>
