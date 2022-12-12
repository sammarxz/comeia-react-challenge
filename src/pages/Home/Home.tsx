import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { MapPin } from 'lucide-react'

import { setLocation } from '@/redux/states/location'
import { createLocationAdapter } from '@/adapters'
import { availableCities } from '@/utilities'
import { darkTheme } from '@/styles/theme'
import { Layout, Container, Header, Button } from '@/components'

import * as S from './styles'

export const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = (city: string) => {
    dispatch(setLocation(createLocationAdapter(city)))
    return navigate('/forecast')
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <Container>
          <Header title="Weather" subtitle="select a city">
            <MapPin size={120} strokeWidth={1} />
          </Header>
          <S.OptionsWrapper>
            <S.Options className="flex flex-wrap justify-center">
              {availableCities.map((city) => (
                <li key={city}>
                  <Button data-test-id={city} onClick={() => handleClick(city)}>
                    {city}
                  </Button>
                </li>
              ))}
            </S.Options>
          </S.OptionsWrapper>
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export default Home
