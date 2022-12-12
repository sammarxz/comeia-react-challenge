import {
  Cloudy,
  Sun,
  Moon,
  Cloud,
  CloudFog,
  CloudSnow,
  CloudRainWind,
  Snowflake,
  CloudLightning
} from 'lucide-react'

export const renderWeatherIcon = (
  name: string,
  size?: number,
  stroke?: number
) => {
  const mood = name.toLowerCase()

  if (mood.includes('cloudy')) {
    return <Cloudy size={size} strokeWidth={stroke} />
  } else if (mood.includes('sunny')) {
    return <Sun size={size} strokeWidth={stroke} />
  } else if (mood.includes('clear')) {
    return <Moon size={size} strokeWidth={stroke} />
  } else if (mood.includes('fog')) {
    return <CloudFog size={size} strokeWidth={stroke} />
  } else if (mood.includes('snow')) {
    return <CloudSnow size={size} strokeWidth={stroke} />
  } else if (
    mood.includes('rain') ||
    mood.includes('drizzle') ||
    mood.includes('sleet')
  ) {
    return <CloudRainWind size={size} strokeWidth={stroke} />
  } else if (mood.includes('ice')) {
    return <Snowflake size={size} strokeWidth={stroke} />
  } else if (mood.includes('thunder')) {
    return <CloudLightning size={size} strokeWidth={stroke} />
  } else {
    return <Cloud size={size} strokeWidth={stroke} />
  }
}
