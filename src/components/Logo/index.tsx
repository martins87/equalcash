import React from 'react'

import SVGImage from '../SVGImage'

interface LogoProps {
  width?: string,
  height?: string
}

const Logo = (props: LogoProps) => {
  const { width, height } = props
  return (
    <SVGImage
      src="logo.svg"
      width={width ? width : "197.88"}
      height={height ? height : "56.75"} />
  )
}

export default Logo
