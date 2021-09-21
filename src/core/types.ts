import React from 'react'
import { CommonColors } from '@material-ui/core/styles/createPalette'

export type ColorType = 'primary' | 'success' | 'info' | 'secondary' | 'warning'
export type AllColorType = ColorType | keyof CommonColors
export type SizeType = 'small' | 'normal' | 'large'

export interface TokenType {
  icon: React.ReactNode,
  name: string,
  color: string
}

export type Types = 'borrow' | 'repay' | 'deposit' | 'withdraw'
