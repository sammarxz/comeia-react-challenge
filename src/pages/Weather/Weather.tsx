import { useWeather } from '@/hooks'
import { AppStore } from '@/redux/store'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const Weather = () => {
  const location = useSelector((store: AppStore) => store.location.city)
  const { weather } = useWeather(location)

  return (
    <>
      {!location && <Navigate to="/" />}
      {!weather ? (
        <span>loading...</span>
      ) : (
        <main>
          <header>
            <h1>{location}</h1>
            <h2>{weather.mood}</h2>
          </header>
          <section>
            <h3>
              <span>{weather.temp.actual}</span>
              <span>C</span>
            </h3>
            <div>
              <p>max: {weather.temp.max}º</p>
              <p>min: {weather.temp.min}º</p>
            </div>
          </section>
          <section>
            {weather.hours.map(({ name, values }) => (
              <div key={name}>
                <h4>{name}</h4>
                <h5>{values.mood}</h5>
                <h6>{values.temp}</h6>
              </div>
            ))}
          </section>
          <section>
            {weather.forecast.map(({ name, value }) => (
              <div key={name}>
                <h4>{name}</h4>
                <h5>{value}</h5>
              </div>
            ))}
          </section>
        </main>
      )}
    </>
  )
}

export default Weather
