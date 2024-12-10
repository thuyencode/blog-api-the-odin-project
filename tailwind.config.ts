import daisyui from 'daisyui'
import daisyuiThemes from 'daisyui/src/theming/themes'
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: { center: true },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyuiThemes.winter
        },
        dark: {
          ...daisyuiThemes.night
        }
      }
    ]
  }
} satisfies Config
