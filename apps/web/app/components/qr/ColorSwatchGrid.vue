<script setup lang="ts">
const { t } = useI18n()

interface Swatch {
  id: string
  key: string
  labelKey: string
  modelValue: string
}

const props = defineProps<{
  swatches: Swatch[]
}>()

const emit = defineEmits<{
  (e: 'update', key: string, value: string): void
}>()
</script>

<template>
  <div class="grid grid-cols-5 gap-2">
    <div v-for="swatch in swatches" :key="swatch.id" class="space-y-1">
      <label
        :for="swatch.id"
        class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer"
        :style="{ backgroundColor: swatch.modelValue }"
      >
        <input
          :id="swatch.id"
          type="color"
          class="sr-only"
          :value="swatch.modelValue"
          @input="emit('update', swatch.key, ($event.target as HTMLInputElement).value)"
        />
      </label>
      <span class="text-[10px] text-muted-foreground text-center block">{{ t(swatch.labelKey) }}</span>
    </div>
  </div>
</template>
