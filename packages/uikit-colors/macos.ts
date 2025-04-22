import { addAlphaToHex, mapHexObjectToRGBString } from './utils'

const lightPaletteHex = {
  red: '#FF453A',
  orange: '#FF9500',
  yellow: '#FFCC00',
  green: '#28CD41',
  mint: '#00C7BE',
  teal: '#59ADC4',
  cyan: '#55BEF0',
  blue: '#007AFF',
  indigo: '#5856D6',
  purple: '#AF52DE',
  pink: '#FF2D55',
  brown: '#A2845E',
  gray: '#8E8E93',
}
const darkPaletteHex = {
  red: '#FF453A',
  orange: '#FF9F0A',
  yellow: '#FFD60A',
  green: '#32D74B',
  mint: '#6AC4DC',
  teal: '#6AC4DC',
  cyan: '#5AC8F5',
  blue: '#0A84FF',
  indigo: '#5E5CE6',
  purple: '#BF5AF2',
  pink: '#FF375F',
  brown: '#AC8E68',
  gray: '#98989D',
}

export const lightPalette = mapHexObjectToRGBString(lightPaletteHex)
export const darkPalette = mapHexObjectToRGBString(darkPaletteHex)

const lightElementsHex = {
  // Fill
  fill: addAlphaToHex('#000000', 0.1),
  fillSecondary: addAlphaToHex('#000000', 0.08),
  fillTertiary: addAlphaToHex('#000000', 0.05),
  fillQuaternary: addAlphaToHex('#000000', 0.03),
  fillQuinary: addAlphaToHex('#000000', 0.02),
  // Fill - Vibrant
  fillVibrant: '#D9D9D9',
  fillVibrantSecondary: '#E6E6E6',
  fillVibrantTertiary: '#F2F2F2',
  fillVibrantQuaternary: '#F7F7F7',
  fillVibrantQuinary: '#FBFBFB',

  // Text
  text: addAlphaToHex('#000000', 0.85),
  textSecondary: addAlphaToHex('#000000', 0.5),
  textTertiary: addAlphaToHex('#000000', 0.25),
  textQuaternary: addAlphaToHex('#000000', 0.1),
  textQuinary: addAlphaToHex('#000000', 0.05),

  // Text - Vibrant
  textVibrant: '#4C4C4C',
  textVibrantSecondary: '#808080',
  textVibrantTertiary: '#BFBFBF',
  textVibrantQuaternary: '#E6E6E6',
  textVibrantQuinary: '#F2F2F2',

  // Material
  materialUltraThick: addAlphaToHex('#F6F6F6', 0.84),
  materialThick: addAlphaToHex('#F6F6F6', 0.72),
  materialMedium: addAlphaToHex('#F6F6F6', 0.6),
  materialThin: addAlphaToHex('#F6F6F6', 0.48),
  materialUltraThin: addAlphaToHex('#F6F6F6', 0.36),

  // Control
  controlEnabled: '#FBFBFB',
  controlDisabled: '#F3F3F3',
}
export const lightElements = mapHexObjectToRGBString(lightElementsHex)
const darkElementsHex = {
  // Fill
  fill: addAlphaToHex('#FFFFFF', 0.1),
  fillSecondary: addAlphaToHex('#FFFFFF', 0.08),
  fillTertiary: addAlphaToHex('#FFFFFF', 0.05),
  fillQuaternary: addAlphaToHex('#FFFFFF', 0.03),
  fillQuinary: addAlphaToHex('#FFFFFF', 0.02),
  // Fill - Vibrant
  fillVibrant: '#242424',
  fillVibrantSecondary: '#141414',
  fillVibrantTertiary: '#0d0d0d',
  fillVibrantQuaternary: '#090909',
  fillVibrantQuinary: '#070707',

  // Text
  text: addAlphaToHex('#FFFFFF', 0.85),
  textSecondary: addAlphaToHex('#FFFFFF', 0.5),
  textTertiary: addAlphaToHex('#FFFFFF', 0.25),
  textQuaternary: addAlphaToHex('#FFFFFF', 0.1),
  textQuinary: addAlphaToHex('#FFFFFF', 0.05),

  // Text - Vibrant
  textVibrant: '#E5E5E5',
  textVibrantSecondary: '#7C7C7C',
  textVibrantTertiary: '#414141',
  textVibrantQuaternary: '#232323',
  textVibrantQuinary: '#111111',

  // Material
  materialUltraThick: addAlphaToHex('#282828', 0.84),
  materialThick: addAlphaToHex('#282828', 0.72),
  materialMedium: addAlphaToHex('#282828', 0.6),
  materialThin: addAlphaToHex('#282828', 0.48),
  materialUltraThin: addAlphaToHex('#282828', 0.36),

  // Control
  controlEnabled: addAlphaToHex('#FFFFFF', 0.2),
  controlDisabled: addAlphaToHex('#FFFFFF', 0.1),
}
export const darkElements = mapHexObjectToRGBString(darkElementsHex)
