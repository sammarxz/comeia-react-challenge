import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import store from '@/redux/store'
import { AxiosInterceptor } from '@/interceptors'
import { routes } from '@/config'

AxiosInterceptor()

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<span>Loading...</span>}>
        <Router>
          <Routes>
            {routes.map(({ path, Element }, i) => (
              <Route key={i} path={path} element={<Element />} />
            ))}
          </Routes>
        </Router>
      </Suspense>
    </Provider>
  )
}

export default App
