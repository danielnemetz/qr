<script setup lang="ts">
import { QrCode, Loader2 } from 'lucide-vue-next'

const { t } = useI18n()

defineProps<{
  generating: boolean
  canGenerate: boolean
}>()

const emit = defineEmits<{
  generate: []
}>()
</script>

<template>
  <Button
    class="w-full"
    size="lg"
    :disabled="!canGenerate || generating"
    @click="emit('generate')"
  >
    <Loader2 v-if="generating" class="mr-2 h-4 w-4 animate-spin" />
    <QrCode v-else class="mr-2 h-4 w-4" />
    {{ generating ? t('generating') : t('generateBtn') }}
  </Button>
</template>
