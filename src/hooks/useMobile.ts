import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

const useMobile = (size: Breakpoint = 'xs') => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.down(size))
}

export default useMobile
