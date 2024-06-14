import { Router } from './routes/router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CyclesProvider } from './hooks/use-cycles'

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <CyclesProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </CyclesProvider>
  )
}
