import { renderHook } from '@testing-library/react-hooks'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { useWeather } from '@/hooks'
import { weatherMock } from '@/__mocks__'

const server = setupServer(
  rest.get('http://api.weatherapi.com/v1/forecast.json', (req, res, ctx) => {
    return res(ctx.json(weatherMock))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const expectedResult = {
  loading: false,
  weather: {
    forecast: {
      humidity: 46,
      sunrise: '04:59 AM',
      sunset: '05:35 PM',
      windSpeed: 11
    },
    hours: {
      afternoon: {
        mood: 'Sunny',
        temp: 30.2
      },
      dawn: {
        mood: 'Patchy rain possible',
        temp: 20.5
      },
      morning: {
        mood: 'Partly cloudy',
        temp: 27.4
      },
      night: {
        mood: 'Partly cloudy',
        temp: 21.7
      }
    },
    mood: 'Partly cloudy',
    temp: {
      actual: 29.6,
      max: 34.9,
      min: 19.9
    }
  }
}

describe('useWeather', () => {
  test('should return forecast data from an city', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useWeather('Caruaru')
    )

    await waitForNextUpdate()

    expect(result.current).toEqual(expectedResult)
  })
})
