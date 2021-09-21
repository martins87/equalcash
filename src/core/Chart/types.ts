import { SizeType } from '../types'

interface OptionType {
  size?: number,
  offset?: number,
  nameOffset?: number,
  valueOffset?: number,
  nameFontSize: string,
  valueFontSize: string
}
export type SizeOptionType = Record<SizeType, OptionType>
