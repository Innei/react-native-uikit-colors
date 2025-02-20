# React Native UIKit Colors

A cross-platform color system for React Native and React Native Web that provides iOS-style semantic colors with dark mode support. Seamlessly integrates with NativeWind/TailwindCSS.

## Features

- 🎨 iOS-style semantic colors that automatically adapt to light/dark mode
- 🌐 Cross-platform support (iOS, Android, Web)
- 🔄 Dynamic color updates when system theme changes
- 🎯 TypeScript support
- 🌊 NativeWind/TailwindCSS integration

## Installation

```bash
npm install react-native-uikit-colors
# or
yarn add react-native-uikit-colors
```

## Setup

### 1. Configure TailwindCSS

Update your `tailwind.config.js`:

```js
import { withUIKit } from 'react-native-uikit-colors/tailwind'

export default withUIKit({
  // your existing tailwind config
})
```

### 2. For Expo Web Support (Optional)

If you're using React Native Web, add the CSS injection hook to your components:

```tsx
'use dom'

import { useCSSInjection } from 'react-native-uikit-colors/web'

function App() {
  useCSSInjection()
  return <YourApp />
}
```

### 3. Inject TailwindCSS Colors

```tsx
const RootProviders = ({ children }: { children: ReactNode }) => {
  useColorScheme() // Observe color scheme changes
  const currentThemeColors = getCurrentColors()!

  return <View style={[styles.flex, currentThemeColors]}>{children}</View>
}

// Your App Entry Component

export const App = () => {
  return <RootProviders>
    <YourApp />
  </RootProviders>
}
```

## Usage

### 1. Using with NativeWind/TailwindCSS

Use semantic color classes directly in your components:

```tsx
function MyComponent() {
  return (
    <View className="bg-system-background">
      <Text className="text-secondary-label text-sm">Hello World</Text>
    </View>
  )
}
```

### 2. Using with React Native's StyleSheet

Use the `useColor` hook to get dynamic colors:

```tsx
import { useColor } from 'react-native-uikit-colors'

function MyComponent() {
  const systemFill = useColor('systemFill')
  const secondarySystemBackground = useColor('secondarySystemBackground')

  // Works with Reanimated
  const colorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        pressed.value,
        [0, 1],
        [secondarySystemBackground, systemFill],
      ),
    }
  })

  return <Animated.View style={colorStyle} />
}
```

## Available Colors

This library provides all standard iOS semantic colors, including:

- `system-background`
- `secondary-system-background`
- `tertiary-system-background`
- `system-grouped-background`
- `secondary-system-grouped-background`
- `tertiary-system-grouped-background`
- `label`
- `secondary-label`
- `tertiary-label`
- `quaternary-label`
- `system-fill`
- `secondary-system-fill`
- `tertiary-system-fill`
- `quaternary-system-fill`
- And more...

## License

MIT
