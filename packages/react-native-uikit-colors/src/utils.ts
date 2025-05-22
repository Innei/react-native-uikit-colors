import type { StyleProp, ViewStyle } from 'react-native'
import { Appearance, StyleSheet } from 'react-native'
import {
  darkElements,
  darkPalette,
  lightElements,
  lightPalette,
} from 'apple-uikit-colors'
import { colorVariants, palette } from './colors'

export const getCurrentColors = () => {
  const colorScheme = Appearance.getColorScheme() || 'light'

  return StyleSheet.compose(
    colorVariants[colorScheme],
    palette[colorScheme],
  ) as StyleProp<ViewStyle>
}

export const getSystemBackgroundColor = () => {
  return getColor('systemBackground')
}

const mergedColorsLight = {
  ...lightElements,
  ...lightPalette,
}
const mergedColorsDark = {
  ...darkElements,
  ...darkPalette,
}

export const getColor = (color: keyof typeof mergedColorsDark) => {
  const colorScheme = Appearance.getColorScheme() || 'light'
  const colors = colorScheme === 'light' ? mergedColorsLight : mergedColorsDark
  return rgbStringToRgb(colors[color])
}

export const rgbStringToRgb = (input: string) => {
  // 支持 'r g b / a' 或 'r g b a' 或 'r g b' 格式
  let rgbPart = input
  let alpha = 1
  if (input.includes('/')) {
    const [rgb, a] = input.split('/')
    rgbPart = rgb.trim()
    alpha = Number.parseFloat(a.trim())
  } else {
    const parts = input.trim().split(/\s+/)
    if (parts.length === 4) {
      alpha = Number.parseFloat(parts[3])
      rgbPart = parts.slice(0, 3).join(' ')
    }
  }
  const [r, g, b] = rgbPart.split(/\s+/).map((s) => Number.parseFloat(s))
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
