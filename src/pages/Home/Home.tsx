import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { AppStore } from '@/redux/store'
import { setLocation } from '@/redux/states/location'
import { createLocationAdapter } from '@/adapters'
import { availableCities } from '@/utilities'

export const Home = () => {
  const dispatch = useDispatch()
  const locationState = useSelector((store: AppStore) => store.location)
  const navigate = useNavigate()

  const handleClick = (city: string) => {
    dispatch(setLocation(createLocationAdapter(city)))
    return navigate('/forecast')
  }

  return (
    <main>
      <header>
        <h1>Weather</h1>
        <h2>select a city</h2>
      </header>
      {Boolean(locationState) && <p>{locationState.city}</p>}
      <ul>
        {availableCities.map((city) => (
          <li key={city}>
            <button onClick={() => handleClick(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home