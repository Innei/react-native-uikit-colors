import { useColorScheme, vars } from 'nativewind'
import { useMemo } from 'react'
import { rgbStringToRgb } from './utils'
import {
  darkElements,
  darkPalette,
  lightElements,
  lightPalette,
} from 'apple-uikit-colors'

// @ts-expect-error
const IS_DOM = typeof ReactNativeWebView !== 'undefined'

const varPrefix = '--color'

const buildVars = (_vars: Record<string, string>) => {
  const cssVars = {} as Record<`${typeof varPrefix}-${string}`, string>
  for (const [key, value] of Object.entries(_vars)) {
    cssVars[`${varPrefix}-${key}`] = value
  }

  return IS_DOM ? cssVars : vars(cssVars)
}

export const palette = {
  // iOS color palette https://developer.apple.com/design/human-interface-guidelines/color
  light: buildVars(lightPalette),
  dark: buildVars(darkPalette),
}

/// Utils

const mergedLightColors = {
  ...lightElements,
  ...lightPalette,
}
const mergedDarkColors = {
  ...darkElements,
  ...darkPalette,
}
const mergedColors = {
  light: mergedLightColors,
  dark: mergedDarkColors,
}

export const colorVariants = {
  light: buildVars(lightElements),
  dark: buildVars(darkElements),
}

export const useColor = (color: keyof typeof mergedLightColors) => {
  const { colorScheme } = useColorScheme()
  const colors = mergedColors[colorScheme || 'light']
  return useMemo(() => rgbStringToRgb(colors[color]), [color, colors])
}

export const useColors = () => {
  const { colorScheme } = useColorScheme()
  return mergedColors[colorScheme || 'light']
}

export type Colors = typeof mergedLightColors
