import {
  Cloudy,
  Sun,
  Moon,
  Cloud,
  CloudFog,
  CloudSnow,
  CloudRainWind,
  CloudRain,
  Snowflake,
  CloudLightning
} from 'lucide-react'

export const renderWeatherIcon = (name: string) => {
  switch (name) {
    case 'Partly cloudy':
      return <Cloudy />
    case 'Sunny':
      return <Sun />
    case 'Clear':
      return <Moon />
    case 'Fog' || 'Mist':
      return <CloudFog />
    case 'Blizzard' ||
      'Freezing fog' ||
      'Patchy light snow' ||
      'Light snow' ||
      'Patchy moderate snow' ||
      'Moderate snow' ||
      'Patchy heavy snow' ||
      'Heavy snow' ||
      'Light snow showers' ||
      'Moderate or heavy snow showers':
      return <CloudSnow />
    case 'Patchy light drizzle' ||
      'Freezing drizzle' ||
      'Light drizzle' ||
      'Heavy freezing drizzle' ||
      'Heavy rain' ||
      'Light freezing rain' ||
      'Light sleet' ||
      'Moderate or heavy sleet':
      return <CloudRainWind />
    case 'Patchy light rain' ||
      'Light rain' ||
      'Moderate rain at times' ||
      'Moderate rain' ||
      'Light rain shower' ||
      'Moderate or heavy rain shower' ||
      'Torrential rain shower' ||
      'Light sleet showers' ||
      'Moderate or heavy sleet showers':
      return <CloudRain />
    case 'Ice pellets' ||
      'Light showers of ice pellets' ||
      'Moderate or heavy showers of ice pellets':
      return <Snowflake />
    case 'Patchy light rain with thunder' ||
      'Moderate or heavy rain with thunder' ||
      'Patchy light snow with thunder' ||
      'Moderate or heavy snow with thunder':
      return <CloudLightning />
    default:
      return <Cloud />
  }
}
