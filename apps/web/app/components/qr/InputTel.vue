<script setup lang="ts">
const phone = defineModel<string>('phone', { required: true })
</script>

<template>
  <h2 class="text-lg font-semibold tracking-tight">Phone</h2>
  <div class="space-y-2">
    <Label for="telPhone">Phone number</Label>
    <Input id="telPhone" v-model="phone" type="tel" placeholder="+1 234 567890" />
  </div>
</template>
