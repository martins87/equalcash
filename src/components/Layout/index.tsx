import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from '../../theme'
import Header from '../Header'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      { children }
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
