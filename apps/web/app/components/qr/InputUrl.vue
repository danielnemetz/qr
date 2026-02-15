<script setup lang="ts">
const url = defineModel<string>('url', { required: true })
</script>

<template>
  <h2 class="text-lg font-semibold tracking-tight">URL</h2>
  <div class="space-y-2">
    <Label for="url">Address</Label>
    <Input id="url" v-model="url" type="url" placeholder="https://example.com" />
  </div>
</template>
