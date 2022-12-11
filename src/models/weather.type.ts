export interface Weather {
  mood: string
  temp: {
    actual: number
    min: number
    max: number
  }
  hours: {
    dawn: {
      temp: number
      mood: string
    }
    morning: {
      temp: number
      mood: string
    }
    afternoon: {
      temp: number
      mood: string
    }
    night: {
      temp: number
      mood: string
    }
  }
  forecast: {
    windSpeed: number
    sunrise: string
    sunset: string
    humidity: number
  }
}
