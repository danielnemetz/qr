<script setup lang="ts">
import { Shuffle } from 'lucide-vue-next'

const { t, locale } = useI18n()

const colorBackground = defineModel<string>('colorBackground', { required: true })
const colorDotsStart = defineModel<string>('colorDotsStart', { required: true })
const colorDotsEnd = defineModel<string>('colorDotsEnd', { required: true })
const colorCorners = defineModel<string>('colorCorners', { required: true })
const colorText = defineModel<string>('colorText', { required: true })
const dotsType = defineModel<string>('dotsType', { required: true })
const cornersSquareType = defineModel<string>('cornersSquareType', { required: true })
const cornersDotType = defineModel<string>('cornersDotType', { required: true })
const imageSize = defineModel<number>('imageSize', { required: true })
const qrMargin = defineModel<number>('qrMargin', { required: true })
const showInfoInImage = defineModel<boolean>('showInfoInImage', { required: true })

const qrMarginArr = computed({
  get: () => [qrMargin.value],
  set: (v: number[]) => {
    qrMargin.value = v[0]
  },
})

const emit = defineEmits<{
  randomize: []
}>()

const colorRefs: Record<string, Ref<string>> = {
  colorBackground, colorDotsStart, colorDotsEnd, colorCorners, colorText,
}

const swatches = computed(() => [
  { id: 'colorBg', key: 'colorBackground', labelKey: 'style.background', modelValue: colorBackground.value },
  { id: 'colorDs', key: 'colorDotsStart', labelKey: 'style.dots1', modelValue: colorDotsStart.value },
  { id: 'colorDe', key: 'colorDotsEnd', labelKey: 'style.dots2', modelValue: colorDotsEnd.value },
  { id: 'colorCo', key: 'colorCorners', labelKey: 'style.corners', modelValue: colorCorners.value },
  { id: 'colorTx', key: 'colorText', labelKey: 'style.text', modelValue: colorText.value },
])

function onSwatchUpdate(key: string, value: string) {
  if (colorRefs[key]) colorRefs[key].value = value
}
</script>

<template>
  <div class="lg:max-h-[min(800px,calc(100vh-100px))] flex flex-col">
    <div class="p-5 lg:p-6 space-y-4 flex-1 overflow-y-auto custom-scrollbar">
      <h2 class="text-lg font-semibold tracking-tight">{{ t('style.title') }}</h2>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <Label class="text-sm text-muted-foreground">{{ t('style.colors') }}</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon" class="h-7 w-7" @click="emit('randomize')">
                  <Shuffle class="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>{{ t('style.randomize') }}</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <QrColorSwatchGrid :swatches="swatches" @update="onSwatchUpdate" />
      </div>
      <div class="space-y-2">
        <Label for="dotsType">{{ t('style.dotStyle') }}</Label>
        <Select :key="'dots-' + locale" v-model="dotsType">
          <SelectTrigger id="dotsType"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="rounded">{{ t('style.rounded') }}</SelectItem>
            <SelectItem value="dots">{{ t('style.dots') }}</SelectItem>
            <SelectItem value="extra-rounded">{{ t('style.extraRounded') }}</SelectItem>
            <SelectItem value="classy">{{ t('style.classy') }}</SelectItem>
            <SelectItem value="classy-rounded">{{ t('style.classyRounded') }}</SelectItem>
            <SelectItem value="square">{{ t('style.square') }}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label for="cornersSquare">{{ t('style.outerCorners') }}</Label>
        <Select :key="'csq-' + locale" v-model="cornersSquareType">
          <SelectTrigger id="cornersSquare"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="extra-rounded">{{ t('style.extraRounded') }}</SelectItem>
            <SelectItem value="square">{{ t('style.square') }}</SelectItem>
            <SelectItem value="dot">{{ t('style.dot') }}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label for="cornersDot">{{ t('style.innerCorners') }}</Label>
        <Select :key="'cd-' + locale" v-model="cornersDotType">
          <SelectTrigger id="cornersDot"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="dot">{{ t('style.dot') }}</SelectItem>
            <SelectItem value="square">{{ t('style.square') }}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label for="imageSize">{{ t('style.imageSize') }}</Label>
        <Select :key="'sz-' + locale" v-model="imageSize">
          <SelectTrigger id="imageSize"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem :value="600">600 px</SelectItem>
            <SelectItem :value="900">900 px</SelectItem>
            <SelectItem :value="1200">1200 px</SelectItem>
            <SelectItem :value="1500">1500 px</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label>{{ t('style.padding') }}: {{ qrMargin }}</Label>
        <Slider v-model="qrMarginArr" :min="0" :max="80" :step="1" class="mt-2" />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox id="showInfo" v-model="showInfoInImage" />
        <Label for="showInfo" class="text-sm font-normal cursor-pointer">{{ t('style.showInfo') }}</Label>
      </div>
    </div>
  </div>
</template>
