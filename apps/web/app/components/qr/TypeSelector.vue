<script setup lang="ts">
import type { QrType } from '@qr/core'
import { QR_TYPES_ORDERED } from '~/utils/constants'

const { t } = useI18n()

const modelValue = defineModel<QrType>({ required: true })
</script>

<template>
  <div class="space-y-2">
    <Label for="qrType">{{ t('qrType') }}</Label>
    <Select v-model="modelValue">
      <SelectTrigger id="qrType">
        <SelectValue :placeholder="t('chooseType')" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="tp in QR_TYPES_ORDERED" :key="tp" :value="tp">
          {{ t(`types.${tp}`) }}
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
