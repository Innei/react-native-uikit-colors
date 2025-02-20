import {
  darkElements,
  darkPalette,
  lightElements,
  lightPalette,
} from 'apple-uikit-colors'
import fs from 'node:fs'
const cssTargets = {
  mediaQuery: './src/media.css',
  selector: './src/selector.css',
}

const cssVariantPrefix = '--color'

const buildCSSVars = (...vars: Record<string, string>[]) => {
  const cssVars = {} as Record<`${typeof cssVariantPrefix}-${string}`, string>
  for (const v of vars) {
    for (const [key, value] of Object.entries(v)) {
      cssVars[`${cssVariantPrefix}-${key}`] = value
    }
  }
  return cssVars
}

const lightCSSVars = buildCSSVars(lightPalette, lightElements)
const darkCSSVars = buildCSSVars(darkPalette, darkElements)

const generateCSS = (
  vars: Record<`${typeof cssVariantPrefix}-${string}`, string>,
  className: string = ':root',
  withMediaQuery?: 'dark' | 'light',
) => {
  const body = `${className} {
    ${Object.entries(vars)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n')}
  }`

  if (withMediaQuery) {
    return `@media (prefers-color-scheme: ${withMediaQuery}) {
      ${body}
    }`
  }

  return body
}

const elementsCSS = generateCSS(lightCSSVars, 'html')
const lightElementsSelectorCSS = generateCSS(
  lightCSSVars,
  'html[data-theme="light"]',
)
const darkElementsSelectorCSS = generateCSS(
  darkCSSVars,
  'html[data-theme="dark"]',
)

const lightElementsMediaCSS = generateCSS(lightCSSVars, 'html', 'light')
const darkElementsMediaCSS = generateCSS(darkCSSVars, 'html', 'dark')

const mergeCSS = (...css: string[]) => {
  return css.join('\n')
}

const writeCSS = (css: string, path: string) => {
  fs.writeFileSync(path, css, { flag: 'a+' })
}

writeCSS(
  mergeCSS(
    elementsCSS,
    lightElementsSelectorCSS,
    darkElementsSelectorCSS,
    lightElementsMediaCSS,
    darkElementsMediaCSS,
  ),
  cssTargets.selector,
)
writeCSS(
  mergeCSS(lightElementsMediaCSS, darkElementsMediaCSS),
  cssTargets.mediaQuery,
)
