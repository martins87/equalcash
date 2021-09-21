import React from 'react'
import { makeStyles, Theme } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import SVGImage from '../SVGImage/SVGImage'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    cursor: 'pointer',
    '&:hover': {
      color: '#FFF'
    }
  }
}))

const socialIcons = {
  'discord': 'discord.svg',
  'github': 'github.svg',
  'linkedin': 'linkedin.svg',
  'medium': 'medium.svg',
  'telegram': 'telegram.svg',
  'twitter': 'twitter.svg'
}

export type SocialIconProps = {
  socialIcon: string,
  width?: string,
  height?: string
}

const SocialIcon = (props: SocialIconProps) => {
  const { socialIcon, width, height } = props
  const classes = useStyles()

  return (
    <Box className={classes.root} >
      <SVGImage
        src={`SocialIcons/${socialIcons[socialIcon]}`}
        width={width ? width : "24"}
        height={height ? height : "24"} />
    </Box>
  )
}

export default SocialIcon
