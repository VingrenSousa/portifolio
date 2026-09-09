import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Home from './pages/home/index.tsx'
import GlobalStyles from './styles/global.tsx'
import Theme from './styles/theme.ts'
import { ThemeProvider } from 'styled-components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider  theme={Theme}>
      <GlobalStyles/>
       <Home/>
    </ThemeProvider>
  </StrictMode>,
)
