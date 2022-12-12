/* eslint-disable @typescript-eslint/indent */
import { Weather } from '@/models'
import { pointHours } from '@/utilities'

export const createWeatherAdapter = (data: any): Weather => ({
  mood: data.current.condition.text,
  temp: {
    actual: Math.round(data.current.temp_c),
    min: Math.round(data.forecast.forecastday[0].day.mintemp_c),
    max: Math.round(data.forecast.forecastday[0].day.maxtemp_c)
  },
  hours: [
    {
      name: 'dawn',
      values: {
        temp: Math.round(
          data.forecast.forecastday[0].hour[pointHours.dawn].temp_c
        ),
        mood: data.forecast.forecastday[0].hour[pointHours.dawn].condition.text
      }
    },
    {
      name: 'morning',
      values: {
        temp: Math.round(
          data.forecast.forecastday[0].hour[pointHours.morning].temp_c
        ),
        mood: data.forecast.forecastday[0].hour[pointHours.morning].condition
          .text
      }
    },
    {
      name: 'afternoon',
      values: {
        temp: Math.round(
          data.forecast.forecastday[0].hour[pointHours.afternoon].temp_c
        ),
        mood: data.forecast.forecastday[0].hour[pointHours.afternoon].condition
          .text
      }
    },
    {
      name: 'night',
      values: {
        temp: Math.round(
          data.forecast.forecastday[0].hour[pointHours.night].temp_c
        ),
        mood: data.forecast.forecastday[0].hour[pointHours.night].condition.text
      }
    }
  ],
  forecast: [
    {
      name: 'wind speed',
      value: data.current.wind_mph,
      unity: 'm/s'
    },
    {
      name: 'sunrise',
      value: data.forecast.forecastday[0].astro.sunrise
    },
    {
      name: 'sunset',
      value: data.forecast.forecastday[0].astro.sunset
    },
    {
      name: 'humidity',
      value: data.current.humidity,
      unity: '%'
    }
  ]
})
