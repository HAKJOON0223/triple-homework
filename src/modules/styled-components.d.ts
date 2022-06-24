import 'styled-components'
import { theme } from '../style/theme'

type TextTheme = typeof theme.text

declare module 'styled-components' {
  export interface DefaultTheme {
    text: TextTheme
  }
}
