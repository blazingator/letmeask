import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    main: string
    bg: string
    lighterBg: string
    darkerBg: string
    fg: string
    darkFg: string
    purple: string
    lightPurple: string
    pink: string
    red: string
    lightGrey: string
    grey: string
    darkGrey: string
    lighterGrey: string
    white: string
    darkWhite: string
    darkerWhite: string
    lighterWhite: string
    borderColor: string
    boxShadow: string
    logo: string
  }
}
