import { Location } from '@/models'

export const createLocationAdapter = (location: string): Location => ({
  city: location
})
