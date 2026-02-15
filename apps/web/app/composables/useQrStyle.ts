import { ref, computed } from 'vue'
import { generateColorScheme } from '~/utils/colorScheme'

export function useQrStyle() {
  const colorBackground = ref('#E4E4F4')
  const colorDotsStart = ref('#2B5A8C')
  const colorDotsEnd = ref('#1B6B4A')
  const colorCorners = ref('#2B4C7E')
  const colorText = ref('#3A3A50')
  const dotsType = ref('rounded')
  const cornersSquareType = ref('extra-rounded')
  const cornersDotType = ref('dot')
  const imageSize = ref(1200)
  const qrMargin = ref(30)
  const qrMarginArr = computed({
    get: () => [qrMargin.value],
    set: (v: number[]) => {
      qrMargin.value = v[0]
    },
  })
  const showInfoInImage = ref(true)

  function randomizeColors() {
    const scheme = generateColorScheme()
    colorBackground.value = scheme.background
    colorDotsStart.value = scheme.dotsStart
    colorDotsEnd.value = scheme.dotsEnd
    colorCorners.value = scheme.corners
    colorText.value = scheme.text
  }

  /** Build the style object for the API request */
  function getStylePayload() {
    return {
      colorBackground: colorBackground.value,
      colorDotsStart: colorDotsStart.value,
      colorDotsEnd: colorDotsEnd.value,
      colorCorners: colorCorners.value,
      colorText: colorText.value,
      dotsType: dotsType.value,
      cornersSquareType: cornersSquareType.value,
      cornersDotType: cornersDotType.value,
      imageSize: imageSize.value,
      qrMargin: qrMargin.value,
      showInfoInImage: Boolean(showInfoInImage.value),
    }
  }

  return {
    colorBackground,
    colorDotsStart,
    colorDotsEnd,
    colorCorners,
    colorText,
    dotsType,
    cornersSquareType,
    cornersDotType,
    imageSize,
    qrMargin,
    qrMarginArr,
    showInfoInImage,
    randomizeColors,
    getStylePayload,
  }
}
