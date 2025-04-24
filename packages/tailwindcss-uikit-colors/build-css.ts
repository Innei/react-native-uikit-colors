import * as iosColors from 'apple-uikit-colors'
import * as macOSColors from 'apple-uikit-colors/macos'
import fs from 'fs/promises'

import { format } from 'prettier'
const buildCSSPreset = async (
  colors: {
    palette: {
      light: Record<string, string>
      dark: Record<string, string>
    }
    elements: {
      light: Record<string, string>
      dark: Record<string, string>
    }
  },

  target: {
    mediaQuery: string
    selector: string
  },
) => {
  const { palette, elements } = colors
  const darkElements = elements.dark
  const lightElements = elements.light
  const darkPalette = palette.dark
  const lightPalette = palette.light

  const cssTargets = target

  const cssVariantPrefix = '--color'

  const cleanupTargets = async () => {
    try {
      await Promise.all([
        fs.unlink(cssTargets.mediaQuery),
        fs.unlink(cssTargets.selector),
      ])
    } catch (e) {}
  }

  const buildCSSVars = (...vars: Record<string, string>[]) => {
    const cssVars = {} as Record<`${typeof cssVariantPrefix}-${string}`, string>
    for (const v of vars) {
      for (const [key, value] of Object.entries(v)) {
        cssVars[`${cssVariantPrefix}-${key}`] = value
      }
    }
    return cssVars
  }

  const buildFixedCSSVars = (
    lightVars: Record<string, string>[],
    darkVars: Record<string, string>[],
  ) => {
    const cssVars = {} as Record<`${typeof cssVariantPrefix}-${string}`, string>

    for (const v of lightVars) {
      for (const [key, value] of Object.entries(v)) {
        cssVars[`${cssVariantPrefix}-${key}-light`] = value
      }
    }

    for (const v of darkVars) {
      for (const [key, value] of Object.entries(v)) {
        cssVars[`${cssVariantPrefix}-${key}-dark`] = value
      }
    }

    return cssVars
  }

  const lightCSSVars = buildCSSVars(lightPalette, lightElements)
  const darkCSSVars = buildCSSVars(darkPalette, darkElements)

  const fixedCSSVars = buildFixedCSSVars(
    [lightPalette, lightElements],
    [darkPalette, darkElements],
  )

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

  const fixedElementsCSS = generateCSS(fixedCSSVars, 'html')

  const mergeCSS = (...css: string[]) => {
    return css.join('\n')
  }

  const writeCSS = async (css: string, path: string) => {
    await fs.writeFile(path, await format(css, { parser: 'css' }), {
      flag: 'a+',
    })
  }

  cleanupTargets()
  await writeCSS(
    mergeCSS(
      fixedElementsCSS,
      elementsCSS,
      lightElementsSelectorCSS,
      darkElementsSelectorCSS,
      lightElementsMediaCSS,
      darkElementsMediaCSS,
    ),
    cssTargets.selector,
  )
  await writeCSS(
    mergeCSS(fixedElementsCSS, lightElementsMediaCSS, darkElementsMediaCSS),
    cssTargets.mediaQuery,
  )
}

export async function build() {
  {
    const { darkElements, darkPalette, lightElements, lightPalette } = iosColors
    await buildCSSPreset(
      {
        palette: {
          light: lightPalette,
          dark: darkPalette,
        },
        elements: { light: lightElements, dark: darkElements },
      },
      {
        mediaQuery: './src/media.css',
        selector: './src/selector.css',
      },
    )
  }

  {
    const { darkElements, darkPalette, lightElements, lightPalette } =
      macOSColors
    await fs.mkdir('./src/macos', { recursive: true })
    await buildCSSPreset(
      {
        palette: {
          light: lightPalette,
          dark: darkPalette,
        },
        elements: { light: lightElements, dark: darkElements },
      },
      {
        mediaQuery: './src/macos/media.css',
        selector: './src/macos/selector.css',
      },
    )
  }
}

// 当直接运行此文件时执行构建
if (require.main === module) {
  build().catch(console.error)
}
