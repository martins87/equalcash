import React from 'react';

export type SVGImageProps = {
  src: string,
  width?: string,
  height?: string
}

const SVGImage = ({ src, width, height }: SVGImageProps) => {
  return <img src={`../../assets/images/${src}`} width={width} height={height} />
}

export default SVGImage;