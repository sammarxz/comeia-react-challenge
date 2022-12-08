import { Location } from '@/models'

export const createLocationAdapter = (location: any): Location => ({
  city: location.city
})
