import { useState, useEffect } from 'react'

import { Weather } from '@/models'
import { darkTheme, snowTheme, rainTheme, sunnyTheme } from '@/styles'

export const useTheme = (weather?: Weather) => {
  const [theme, setTheme] = useState(darkTheme)

  const selectTheme = () => {
    if (weather) {
      let { mood } = weather
      mood = mood.toLowerCase()

      if (mood.includes('sunny')) {
        setTheme(sunnyTheme)
      } else if (
        mood.includes('rain') ||
        mood.includes('drizzle') ||
        mood.includes('sleet' || mood.includes('shower'))
      ) {
        setTheme(rainTheme)
      } else if (
        mood.includes('snow') ||
        mood.includes('fog') ||
        mood.includes('ice')
      ) {
        setTheme(snowTheme)
      } else {
        setTheme(darkTheme)
      }
    }
  }

  useEffect(() => {
    selectTheme()
  }, [weather])

  return { theme }
}
