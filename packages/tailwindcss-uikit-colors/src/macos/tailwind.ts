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

  fill: 'rgb(var(--color-fill) / <alpha-value>)',
  'fill-secondary': 'rgb(var(--color-fillSecondary) / <alpha-value>)',
  'fill-tertiary': 'rgb(var(--color-fillTertiary) / <alpha-value>)',
  'fill-quaternary': 'rgb(var(--color-fillQuaternary) / <alpha-value>)',
  'fill-quinary': 'rgb(var(--color-fillQuinary) / <alpha-value>)',
  'fill-vibrant': 'rgb(var(--color-fillVibrant) / <alpha-value>)',
  'fill-vibrant-secondary':
    'rgb(var(--color-fillVibrantSecondary) / <alpha-value>)',
  'fill-vibrant-tertiary':
    'rgb(var(--color-fillVibrantTertiary) / <alpha-value>)',
  'fill-vibrant-quaternary':
    'rgb(var(--color-fillVibrantQuaternary) / <alpha-value>)',
  'fill-vibrant-quinary':
    'rgb(var(--color-fillVibrantQuinary) / <alpha-value>)',
  text: 'rgb(var(--color-text) / <alpha-value>)',
  'text-secondary': 'rgb(var(--color-textSecondary) / <alpha-value>)',
  'text-tertiary': 'rgb(var(--color-textTertiary) / <alpha-value>)',
  'text-quaternary': 'rgb(var(--color-textQuaternary) / <alpha-value>)',
  'text-quinary': 'rgb(var(--color-textQuinary) / <alpha-value>)',
  'text-vibrant': 'rgb(var(--color-textVibrant) / <alpha-value>)',
  'text-vibrant-secondary':
    'rgb(var(--color-textVibrantSecondary) / <alpha-value>)',
  'text-vibrant-tertiary':
    'rgb(var(--color-textVibrantTertiary) / <alpha-value>)',
  'text-vibrant-quaternary':
    'rgb(var(--color-textVibrantQuaternary) / <alpha-value>)',
  'text-vibrant-quinary':
    'rgb(var(--color-textVibrantQuinary) / <alpha-value>)',
  'material-ultra-thick':
    'rgb(var(--color-materialUltraThick) / <alpha-value>)',
  'material-thick': 'rgb(var(--color-materialThick) / <alpha-value>)',
  'material-medium': 'rgb(var(--color-materialMedium) / <alpha-value>)',
  'material-thin': 'rgb(var(--color-materialThin) / <alpha-value>)',
  'material-ultra-thin': 'rgb(var(--color-materialUltraThin) / <alpha-value>)',
  'control-enabled': 'rgb(var(--color-controlEnabled) / <alpha-value>)',
  'control-disabled': 'rgb(var(--color-controlDisabled) / <alpha-value>)',
  menu: 'rgb(var(--color-menu) / <alpha-value>)',
  popover: 'rgb(var(--color-popover) / <alpha-value>)',
  titlebar: 'rgb(var(--color-titlebar) / <alpha-value>)',
  sidebar: 'rgb(var(--color-sidebar) / <alpha-value>)',
  'selection-focused': 'rgb(var(--color-selectionFocused) / <alpha-value>)',
  'selection-focused-fill':
    'rgb(var(--color-selectionFocusedFill) / <alpha-value>)',
  'selection-unfocused': 'rgb(var(--color-selectionUnfocused) / <alpha-value>)',
  'selection-unfocused-fill':
    'rgb(var(--color-selectionUnfocusedFill) / <alpha-value>)',
  'header-view': 'rgb(var(--color-headerView) / <alpha-value>)',
  tooltip: 'rgb(var(--color-tooltip) / <alpha-value>)',
  'under-window-background':
    'rgb(var(--color-underWindowBackground) / <alpha-value>)',
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
