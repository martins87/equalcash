import { useMemo } from 'react'
import { ApexOptions } from 'apexcharts'

import theme from '../../theme'
import ApexChart from './ApexChart'
import { ColorType, SizeType } from '../types'
import { SizeOptionType } from './types'

type Size = string | number

const sizeOptions: SizeOptionType = {
  small: {
    nameFontSize: '12px',
    valueFontSize: '12px',
    nameOffset: -3,
    valueOffset: 0,
  },
  normal: {
    nameFontSize: '24px',
    valueFontSize: '18px',
    nameOffset: -10,
    valueOffset: 10,
  },
  large: {
    nameFontSize: '28px',
    valueFontSize: '22px',
  }
}

interface RadialBarProps {
  label: string,
  value: number,
  color: ColorType,
  width?: Size,
  height?: Size,
  size: SizeType
}

const getOptions = (label: string, color: ColorType, size: SizeType): ApexOptions => ({
  chart: {
    fontFamily: 'MuseoModerno, cursive',
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '85%',
        background: 'transparent',
        position: 'front',
      },
      track: {
        background: theme.palette[color].light,
        strokeWidth: '100%',
        margin: 0,
      },
      dataLabels: {
        name: {
          show: true,
          color: theme.palette[color].main,
          offsetY: sizeOptions[size].nameOffset,
          fontSize: sizeOptions[size].nameFontSize
        },
        value: {
          color: theme.palette.common.white,
          offsetY: sizeOptions[size].valueOffset,
          fontSize: sizeOptions[size].valueFontSize,
          show: true
        }
      }
    }
  },
  fill: {
    type: 'solid',
    colors: [theme.palette[color].main]
  },
  stroke: {
    lineCap: 'round'
  },
  labels: [label]
})

const RadialBar = ({ label, value, color, width, height, size }: RadialBarProps) => {
  const options = useMemo(
    () => getOptions(label, color, size),
    [label, color, size]
  )

  return (
    <ApexChart
      options={options}
      series={[value]}
      type="radialBar"
      width={width}
      height={height}
    />
  )
}

RadialBar.defaultProps = {
  color: 'primary',
  size: 'normal'
}

export default RadialBar
