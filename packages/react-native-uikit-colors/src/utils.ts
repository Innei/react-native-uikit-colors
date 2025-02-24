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

export const rgbStringToRgb = (hex: string) => {
  const [r, g, b, a] = hex.split(' ').map((s) => Number.parseFloat(s))
  return `rgba(${r}, ${g}, ${b}, ${a || 1})`
}
