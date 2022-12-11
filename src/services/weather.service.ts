import axios from 'axios'

import { loadAbort } from '@/utilities'

export const weatherService = {
  getForecast: (city: string) => {
    const controller = loadAbort()
    return {
      call: axios.get(`http://api.weatherapi.com/v1/forecast.json?q=${city}`, {
        signal: controller.signal
      }),
      controller
    }
  }
}
