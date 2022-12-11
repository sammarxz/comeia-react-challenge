import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'

export const Weather = () => {
  const locationState = useSelector((store: AppStore) => store.location)
  return <div>{locationState.city}</div>
}

export default Weather
