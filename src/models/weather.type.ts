import { Forecast, Hours } from '@/models'

export interface Weather {
  mood: string
  temp: {
    actual: number
    min: number
    max: number
  }
  hours: Hours[]
  forecast: Forecast[]
}
