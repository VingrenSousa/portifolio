import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



import GlobalStyles from './styles/global'
import Thema from './styles/theme.ts'
import { ThemeProvider } from 'styled-components'
import App from './app/Index/index.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider  theme={Thema}>
      <GlobalStyles/>
       <App/>
    </ThemeProvider>
  </StrictMode>,
)
