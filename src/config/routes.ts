import { lazy } from 'react'

// pages
const Home = lazy(async () => await import('@/pages/Home/Home'))
const Weather = lazy(async () => await import('@/pages/Weather/Weather'))

// routes
export const routes = [
  {
    path: '/',
    Element: Home
  },
  {
    path: 'forecast',
    Element: Weather
  }
]
