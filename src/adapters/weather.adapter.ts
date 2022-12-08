import { Weather } from '@/models'
import { pointHours } from '@/utilities'

export const createWeatherAdapter = (data: any): Weather => ({
  mood: data.current.condition.text,
  temp: {
    actual: data.current.temp_c,
    min: data.forecast.forecastday[0].day.mintemp_c,
    max: data.forecast.forecastday[0].day.maxtemp_c
  },
  hours: {
    dawn: {
      temp: data.forecast.forecastday[0].hour[pointHours.dawn].temp_c,
      mood: data.forecast.forecastday[0].hour[pointHours.dawn].condition.text
    },
    morning: {
      temp: data.forecast.forecastday[0].hour[pointHours.morning].temp_c,
      mood: data.forecast.forecastday[0].hour[pointHours.morning].condition.text
    },
    afternoon: {
      temp: data.forecast.forecastday[0].hour[pointHours.afternoon].temp_c,
      mood: data.forecast.forecastday[0].hour[pointHours.afternoon].condition
        .text
    },
    night: {
      temp: data.forecast.forecastday[0].hour[pointHours.night].temp_c,
      mood: data.forecast.forecastday[0].hour[pointHours.night].condition.text
    }
  },
  forecast: {
    windSpeed: data.current.wind_mph,
    sunrise: data.forecast.forecastday[0].astro.sunrise,
    sunset: data.forecast.forecastday[0].astro.sunset,
    humidity: data.current.humidity
  }
})
