export enum TickRange {
  SAFE = 'safe',
  LIMIT = 'limit',
  LIQUIDATION = 'liquidation'
}

export interface Percentage {
  safe: number,
  limit: number,
  value: number,
  range: TickRange
}
