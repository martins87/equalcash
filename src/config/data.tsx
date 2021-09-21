import React from 'react'
import Image from 'next/image'

export type Tokens = 'eth' | 'dai' | 'usdc' | 'usdt'

export const Icons: Record<Tokens, React.ReactNode> = {
  eth: <Image width="100%" height="100%" src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@07fd63a0b662ed99c8ad870ee9227b8ef5e11630/128/white/etc.png" alt="ETH" />,
  dai: <Image width="100%" height="100%" src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@07fd63a0b662ed99c8ad870ee9227b8ef5e11630/128/color/dai.png" alt="DAI" />,
  usdc: <Image width="100%" height="100%" src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@07fd63a0b662ed99c8ad870ee9227b8ef5e11630/128/white/usdc.png" alt="USDC" />,
  usdt: <Image width="100%" height="100%" src="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@07fd63a0b662ed99c8ad870ee9227b8ef5e11630/128/white/usdt.png" alt="USDT" />
}

export const tokens = [
  { icon: Icons.eth, name: 'ETH', color: '#FFFFFF' },
  { icon: Icons.dai, name: 'DAI', color: 'rgba(251, 189, 59)' },
  { icon: Icons.usdc, name: 'USDC', color: 'rgba(39, 117, 201)' },
  { icon: Icons.usdt, name: 'USDT', color: 'rgba(34, 160, 121)' }
]

export const collaterals = [
  { icon: Icons.eth, usd: 35567.34, amount: 17, symbol: 'ETH' },
  { icon: Icons.dai, usd: 342234.34, amount: 231, symbol: 'DAI' },
  { icon: Icons.usdc, usd: 23453.34, amount: 23453.34, symbol: 'USDC' },
  { icon: Icons.usdt, usd: 23453.34, amount: 23453.34, symbol: 'USDT' }
]
