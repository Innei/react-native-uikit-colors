import { useColorScheme, vars } from 'nativewind'
import { useMemo } from 'react'
import { rgbStringToRgb } from './utils'

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

const lightPalette = {
  red: '255 59 48',
  orange: '255 149 0',
  yellow: '255 204 0',
  green: '52 199 89',
  mint: '0 199 190',
  teal: '48 176 190',
  cyan: '50 173 200',
  blue: '0 122 255',
  indigo: '88 86 214',
  purple: '175 82 222',
  pink: '255 45 85',
  brown: '162 132 94',
  gray: '142 142 147',
  gray2: '172 172 178',
  gray3: '199 199 204',
  gray4: '209 209 214',
  gray5: '229 229 234',
  gray6: '242 242 247',
}
const darkPalette = {
  red: '255 69 58',
  orange: '255 175 113',
  yellow: '255 214 10',
  green: '48 209 88',
  mint: '99 230 226',
  teal: '64 200 244',
  cyan: '100 210 255',
  blue: '10 132 255',
  indigo: '94 92 230',
  purple: '191 90 242',
  pink: '255 55 95',
  brown: '172 142 104',
  gray: '142 142 147',
  gray2: '99 99 102',
  gray3: '72 72 74',
  gray4: '58 58 60',
  gray5: '44 44 46',
  gray6: '28 28 30',
}

export const palette = {
  // iOS color palette https://developer.apple.com/design/human-interface-guidelines/color
  light: buildVars(lightPalette),
  dark: buildVars(darkPalette),
}

export const lightElements = {
  // UIKit Colors

  placeholderText: '199 199 204',
  separator: '84 84 86 0.34',
  opaqueSeparator: '198 198 200',
  nonOpaqueSeparator: '84 84 86 0.34',
  link: '0 122 255',

  systemBackground: '255 255 255',
  secondarySystemBackground: '242 242 247',
  tertiarySystemBackground: '255 255 255',

  // Grouped
  systemGroupedBackground: '242 242 247',
  secondarySystemGroupedBackground: '255 255 255',
  tertiarySystemGroupedBackground: '242 242 247',

  // System Colors
  systemFill: '120 120 128 0.2',
  secondarySystemFill: '120 120 128 0.16',
  tertiarySystemFill: '120 120 128 0.12',
  quaternarySystemFill: '120 120 128 0.08',

  // Text Colors
  label: '0 0 0',
  text: '0 0 0',
  secondaryLabel: '60 60 67 0.6',
  tertiaryLabel: '60 60 67 0.3',
  quaternaryLabel: '60 60 67 0.18',
}
export const darkElements = {
  // UIKit Colors

  placeholderText: '122 122 122',
  separator: '84 84 86 0.6',
  opaqueSeparator: '56 56 58',
  nonOpaqueSeparator: '84 84 86 0.6',
  link: '10 132 255',
  systemBackground: '0 0 0',
  secondarySystemBackground: '28 28 30',
  tertiarySystemBackground: '44 44 46',

  // Grouped
  systemGroupedBackground: '0 0 0',
  secondarySystemGroupedBackground: '28 28 30',
  tertiarySystemGroupedBackground: '44 44 46',

  // System Colors
  systemFill: '120 120 128 0.36',
  secondarySystemFill: '120 120 128 0.32',
  tertiarySystemFill: '120 120 128 0.24',
  quaternarySystemFill: '120 120 128 0.19',

  // Text Colors
  label: '255 255 255',
  text: '255 255 255',
  secondaryLabel: '235 235 245 0.6',
  tertiaryLabel: '235 235 245 0.3',
  quaternaryLabel: '235 235 245 0.18',
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
