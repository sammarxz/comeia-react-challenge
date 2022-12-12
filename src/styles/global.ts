import { createGlobalStyle } from 'styled-components'

import { Reset, Base, Headings } from './_base'
import { Flexbox, Text } from './_helpers'

export const GlobalStyle = createGlobalStyle`
  // Base
  ${Reset}
  ${Base}
  ${Headings}

  // Helpers
  ${Text}
  ${Flexbox}
`
