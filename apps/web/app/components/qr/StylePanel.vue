<script setup lang="ts">
import { Shuffle } from 'lucide-vue-next'

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
</script>

<template>
  <div class="lg:max-h-[min(800px,calc(100vh-100px))] flex flex-col">
    <div class="p-5 lg:p-6 space-y-4 flex-1 overflow-y-auto custom-scrollbar">
      <h2 class="text-lg font-semibold tracking-tight">Style</h2>
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <Label class="text-sm text-muted-foreground">Colors</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button variant="ghost" size="icon" class="h-7 w-7" @click="emit('randomize')">
                  <Shuffle class="h-3.5 w-3.5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>Random color scheme</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div class="grid grid-cols-5 gap-2">
          <div class="space-y-1">
            <label
              for="colorBg"
              class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer"
              :style="{ backgroundColor: colorBackground }"
            >
              <input id="colorBg" v-model="colorBackground" type="color" class="sr-only" />
            </label>
            <span class="text-[10px] text-muted-foreground text-center block">Background</span>
          </div>
          <div class="space-y-1">
            <label
              for="colorDs"
              class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer"
              :style="{ backgroundColor: colorDotsStart }"
            >
              <input id="colorDs" v-model="colorDotsStart" type="color" class="sr-only" />
            </label>
            <span class="text-[10px] text-muted-foreground text-center block">Dots 1</span>
          </div>
          <div class="space-y-1">
            <label
              for="colorDe"
              class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer"
              :style="{ backgroundColor: colorDotsEnd }"
            >
              <input id="colorDe" v-model="colorDotsEnd" type="color" class="sr-only" />
            </label>
            <span class="text-[10px] text-muted-foreground text-center block">Dots 2</span>
          </div>
          <div class="space-y-1">
            <label
              for="colorCo"
              class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer"
              :style="{ backgroundColor: colorCorners }"
            >
              <input id="colorCo" v-model="colorCorners" type="color" class="sr-only" />
            </label>
            <span class="text-[10px] text-muted-foreground text-center block">Corners</span>
          </div>
          <div class="space-y-1">
            <label
              for="colorTx"
              class="block w-full aspect-square rounded-md border border-border overflow-hidden cursor-pointer"
              :style="{ backgroundColor: colorText }"
            >
              <input id="colorTx" v-model="colorText" type="color" class="sr-only" />
            </label>
            <span class="text-[10px] text-muted-foreground text-center block">Text</span>
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <Label for="dotsType">Dot style</Label>
        <Select v-model="dotsType">
          <SelectTrigger id="dotsType"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="rounded">Rounded</SelectItem>
            <SelectItem value="dots">Dots</SelectItem>
            <SelectItem value="extra-rounded">Extra Rounded</SelectItem>
            <SelectItem value="classy">Classy</SelectItem>
            <SelectItem value="classy-rounded">Classy Rounded</SelectItem>
            <SelectItem value="square">Square</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label for="cornersSquare">Outer corners</Label>
        <Select v-model="cornersSquareType">
          <SelectTrigger id="cornersSquare"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="extra-rounded">Extra Rounded</SelectItem>
            <SelectItem value="square">Square</SelectItem>
            <SelectItem value="dot">Dot</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label for="cornersDot">Inner corners</Label>
        <Select v-model="cornersDotType">
          <SelectTrigger id="cornersDot"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="dot">Dot</SelectItem>
            <SelectItem value="square">Square</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label for="imageSize">Image size</Label>
        <Select v-model="imageSize">
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
        <Label>Padding: {{ qrMargin }}</Label>
        <Slider v-model="qrMarginArr" :min="0" :max="80" :step="1" class="mt-2" />
      </div>
      <div class="flex items-center gap-2">
        <Checkbox id="showInfo" v-model="showInfoInImage" />
        <Label for="showInfo" class="text-sm font-normal cursor-pointer">Show info text</Label>
      </div>
    </div>
  </div>
</template>
