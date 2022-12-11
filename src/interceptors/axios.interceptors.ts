import axios, { AxiosRequestConfig } from 'axios'

export const WEATHER_API_KEY = process.env.VITE_WEATHER_API_KEY

export const AxiosInterceptor = () => {
  axios.interceptors.request.use((request: AxiosRequestConfig) => {
    request.params = {
      key: WEATHER_API_KEY,
      aqi: 'no',
      alerts: 'no',
      days: 1
    }
    return request
  })
}
