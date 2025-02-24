import type { StyleProp, ViewStyle } from 'react-native'
import { Appearance, StyleSheet } from 'react-native'
import { darkElements, lightElements } from 'apple-uikit-colors'
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

export const getColor = (color: keyof typeof lightElements) => {
  const colorScheme = Appearance.getColorScheme() || 'light'
  const colors = colorScheme === 'light' ? lightElements : darkElements
  return rgbStringToRgb(colors[color])
}

export const rgbStringToRgb = (hex: string) => {
  const [r, g, b, a] = hex.split(' ').map((s) => Number.parseFloat(s))
  return `rgba(${r}, ${g}, ${b}, ${a || 1})`
}
