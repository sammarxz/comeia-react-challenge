import { renderHook } from '@testing-library/react-hooks'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import { useWeather } from '@/hooks'
import { weatherMock } from '@/__mocks__'
import { API_URL } from '@/config/apiURL'

const server = setupServer(
  rest.get(API_URL, (req, res, ctx) => {
    return res(ctx.json(weatherMock))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

const expectedResult = {
  loading: false,
  weather: {
    mood: 'Partly cloudy',
    temp: { actual: 30, min: 20, max: 35 },
    hours: [
      { name: 'dawn', values: { temp: 21, mood: 'Patchy rain possible' } },
      { name: 'morning', values: { temp: 27, mood: 'Partly cloudy' } },
      { name: 'afternoon', values: { temp: 30, mood: 'Sunny' } },
      { name: 'night', values: { temp: 22, mood: 'Partly cloudy' } }
    ],
    forecast: [
      { name: 'wind speed', value: 11, unity: 'm/s' },
      { name: 'sunrise', value: '04:59 AM' },
      { name: 'sunset', value: '05:35 PM' },
      { name: 'humidity', value: 46, unity: '%' }
    ]
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
