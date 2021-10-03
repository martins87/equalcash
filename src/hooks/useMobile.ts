import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Breakpoint } from '@mui/material/styles' //???

const useMobile = (size: Breakpoint = 'xs') => {
  const theme = useTheme()
  //console.log(`theme.breakpoints.down(${size})`, theme.breakpoints.down(size))
  return useMediaQuery('(max-width:600px)')
  //return useMediaQuery(theme.breakpoints.down(size))
}

export default useMobile
