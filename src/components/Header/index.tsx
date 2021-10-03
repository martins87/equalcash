import React from 'react'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'

import Balance from '../Balance'
import WalletConnector from '../WalletConnector'
import Link from '../../core/Link'
import useMobile from '../../hooks/useMobile'

const Header = () => {
  const onMobile = useMobile()

  React.useEffect(() => {
    console.log('mobile:', onMobile)
  }, [onMobile])

  return (
    <AppBar position="static" color="transparent" style={{ boxShadow: 'none' }}>
      <Container>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Image src="/assets/images/logo.svg" alt="Composable logo" width="125" height="35" />
          { !onMobile && (
            <>
              <Link style={{ color: 'rgba(37, 37, 37, 0.6)' }} href="/">Overview</Link>
              <Link style={{ color: 'rgba(37, 37, 37, 0.6)' }} href="/portfolio">Portfolio</Link>
              <Link style={{ color: 'rgba(37, 37, 37, 0.6)' }} href="/eqlc">Equal Cash</Link>
              <Balance balance={256.325} />
              <WalletConnector address="0xb4711e067096B404356D93568EB8aa6b8dA528E6" />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
