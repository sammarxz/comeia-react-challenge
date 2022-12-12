/* eslint-disable @typescript-eslint/dot-notation */
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ArrowUp, ArrowDown, ArrowLeft } from 'lucide-react'

import { useWeather, useTheme } from '@/hooks'
import { AppStore } from '@/redux/store'
import { renderWeatherIcon } from '@/utilities'
import { Container, Header, Layout, Loading } from '@/components'

import * as S from './styles'

export const Weather = () => {
  const location = useSelector((store: AppStore) => store.location.city)
  const { weather } = useWeather(location)
  const { theme } = useTheme(weather)

  return (
    <ThemeProvider theme={theme}>
      {!location && <Navigate to="/" />}
      {!weather ? (
        <Loading />
      ) : (
        <Layout>
          <S.BackIcon to="/">
            <ArrowLeft size={32} strokeWidth={2} />
          </S.BackIcon>
          <Container>
            <Header title={location} subtitle={weather.mood}>
              <>
                <S.ActualTemp className="flex items-end justify-center gap-xxsmall">
                  <h3 className="value">{weather.temp.actual}</h3>
                  <div className="minMax flex flex-col items-start">
                    <p>
                      <span>
                        <ArrowUp size={16} strokeWidth={1} />
                      </span>{' '}
                      {weather.temp.max}º
                    </p>
                    <p>
                      <span>
                        <ArrowDown size={16} strokeWidth={1} />
                      </span>{' '}
                      {weather.temp.min}º
                    </p>
                  </div>
                </S.ActualTemp>
                <S.IconWrapper>
                  {renderWeatherIcon(weather.mood, 140, 1)}
                </S.IconWrapper>
              </>
            </Header>
            <S.Hours className="flex justify-spaceBetween">
              {weather.hours.map(({ name, values }) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center"
                >
                  <h4 className="name text-small">{name}</h4>
                  <div className="icon">
                    {renderWeatherIcon(values.mood, 36, 2)}
                  </div>
                  <h5 className="temp text-normal">{values.temp} ºC</h5>
                </div>
              ))}
            </S.Hours>
            <S.Forecast className="flex justify-spaceBetween">
              {weather.forecast.map(({ name, value, unity }) => (
                <div key={name}>
                  <h4 className="name">{name}</h4>
                  <div className="flex gap-xxsmall align-center justify-center">
                    <h5 className="value">{value}</h5>
                    {unity && <span>{unity}</span>}
                  </div>
                </div>
              ))}
            </S.Forecast>
          </Container>
        </Layout>
      )}
    </ThemeProvider>
  )
}

export default Weather
