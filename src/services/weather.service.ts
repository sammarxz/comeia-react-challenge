import axios from 'axios'

import { loadAbort } from '@/utilities'
import { API_URL } from '@/config/apiURL'

export const weatherService = {
  getForecast: (city: string) => {
    const controller = loadAbort()
    return {
      call: axios.get(`${API_URL}?q=${city}`, {
        signal: controller.signal
      })
    }
  }
}
