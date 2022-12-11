import { useState } from 'react'
import { useSelector } from 'react-redux'

import { createWeatherAdapter } from '@/adapters'
import { useAsync, useFetchAndLoad } from '@/hooks'
import { AppStore } from '@/redux/store'
import { weatherService } from '@/services'
import { Weather } from '@/models/weather.type'

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather>()
  const { loading, callEndpoint } = useFetchAndLoad()
  const location = useSelector((store: AppStore) => store.location.city)

  const getApiData = async () =>
    await callEndpoint(weatherService.getForecast(location))

  const adaptWeather = (data: any) => {
    setWeather(createWeatherAdapter(data))
  }

  useAsync(getApiData, adaptWeather, () => {}, [])

  return { loading, weather }
}
