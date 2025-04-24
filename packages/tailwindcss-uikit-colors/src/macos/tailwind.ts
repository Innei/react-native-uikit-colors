import { Config } from 'tailwindcss'
import defaultColors from 'tailwindcss/colors'

const configColors = {
  red: {
    ...defaultColors.red,
    DEFAULT: 'rgb(var(--color-red) / <alpha-value>)',
  },
  orange: {
    ...defaultColors.orange,
    DEFAULT: 'rgb(var(--color-orange) / <alpha-value>)',
  },
  yellow: {
    ...defaultColors.yellow,
    DEFAULT: 'rgb(var(--color-yellow) / <alpha-value>)',
  },
  green: {
    ...defaultColors.green,
    DEFAULT: 'rgb(var(--color-green) / <alpha-value>)',
  },
  mint: 'rgb(var(--color-mint) / <alpha-value>)',
  teal: {
    ...defaultColors.teal,
    DEFAULT: 'rgb(var(--color-teal) / <alpha-value>)',
  },
  cyan: {
    ...defaultColors.cyan,
    DEFAULT: 'rgb(var(--color-cyan) / <alpha-value>)',
  },
  blue: {
    ...defaultColors.blue,
    DEFAULT: 'rgb(var(--color-blue) / <alpha-value>)',
  },
  indigo: {
    ...defaultColors.indigo,
    DEFAULT: 'rgb(var(--color-indigo) / <alpha-value>)',
  },
  purple: {
    ...defaultColors.purple,
    DEFAULT: 'rgb(var(--color-purple) / <alpha-value>)',
  },
  pink: {
    ...defaultColors.pink,
    DEFAULT: 'rgb(var(--color-pink) / <alpha-value>)',
  },
  brown: 'rgb(var(--color-brown) / <alpha-value>)',
  gray: {
    ...defaultColors.gray,
    DEFAULT: 'rgb(var(--color-gray) / <alpha-value>)',
  },

  fill: 'rgba(var(--color-fill))',
  'fill-secondary': 'rgba(var(--color-fillSecondary))',
  'fill-tertiary': 'rgba(var(--color-fillTertiary))',
  'fill-quaternary': 'rgba(var(--color-fillQuaternary))',
  'fill-quinary': 'rgba(var(--color-fillQuinary))',
  'fill-vibrant': 'rgb(var(--color-fillVibrant) / <alpha-value>)',
  'fill-vibrant-secondary':
    'rgb(var(--color-fillVibrantSecondary) / <alpha-value>)',
  'fill-vibrant-tertiary':
    'rgb(var(--color-fillVibrantTertiary) / <alpha-value>)',
  'fill-vibrant-quaternary':
    'rgb(var(--color-fillVibrantQuaternary) / <alpha-value>)',
  'fill-vibrant-quinary':
    'rgb(var(--color-fillVibrantQuinary) / <alpha-value>)',
  text: 'rgba(var(--color-text))',
  'text-secondary': 'rgba(var(--color-textSecondary))',
  'text-tertiary': 'rgba(var(--color-textTertiary))',
  'text-quaternary': 'rgba(var(--color-textQuaternary))',
  'text-quinary': 'rgba(var(--color-textQuinary))',
  'text-vibrant': 'rgb(var(--color-textVibrant) / <alpha-value>)',
  'text-vibrant-secondary':
    'rgb(var(--color-textVibrantSecondary) / <alpha-value>)',
  'text-vibrant-tertiary':
    'rgb(var(--color-textVibrantTertiary) / <alpha-value>)',
  'text-vibrant-quaternary':
    'rgb(var(--color-textVibrantQuaternary) / <alpha-value>)',
  'text-vibrant-quinary':
    'rgb(var(--color-textVibrantQuinary) / <alpha-value>)',
  'material-ultra-thick': 'rgba(var(--color-materialUltraThick))',
  'material-thick': 'rgba(var(--color-materialThick))',
  'material-medium': 'rgba(var(--color-materialMedium))',
  'material-thin': 'rgba(var(--color-materialThin))',
  'material-ultra-thin': 'rgba(var(--color-materialUltraThin))',
  'material-opaque': 'rgb(var(--color-materialOpaque) / <alpha-value>)',
  'control-enabled': 'rgba(var(--color-controlEnabled))',
  'control-disabled': 'rgba(var(--color-controlDisabled))',
  menu: 'rgba(var(--color-menu))',
  popover: 'rgba(var(--color-popover))',
  titlebar: 'rgba(var(--color-titlebar))',
  sidebar: 'rgba(var(--color-sidebar))',
  'selection-focused': 'rgba(var(--color-selectionFocused))',
  'selection-focused-fill':
    'rgb(var(--color-selectionFocusedFill) / <alpha-value>)',
  'selection-unfocused': 'rgba(var(--color-selectionUnfocused))',
  'selection-unfocused-fill': 'rgba(var(--color-selectionUnfocusedFill))',
  'header-view': 'rgba(var(--color-headerView))',
  tooltip: 'rgba(var(--color-tooltip))',
  'under-window-background': 'rgba(var(--color-underWindowBackground))',
}
export const withUIKit = (config: Config) => {
  config.theme = config.theme || {}
  config.theme.extend = config.theme.extend || {}
  config.theme.extend.colors = config.theme.extend.colors || {}
  config.theme.extend.colors = {
    ...config.theme.extend.colors,
    ...configColors,
  }
  return config
}

export { configColors as colors }
