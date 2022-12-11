import { IpointHours } from '@/models'

export interface Hours {
  name: keyof IpointHours
  values: {
    temp: number
    mood: string
  }
}
