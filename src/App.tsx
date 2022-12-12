import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import store from '@/redux/store'
import { AxiosInterceptor } from '@/interceptors'
import { routes } from '@/config'
import { GlobalStyle, darkTheme } from '@/styles'
import { Loading } from '@/components'

AxiosInterceptor()

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <Router>
            <Routes>
              {routes.map(({ path, Element }, i) => (
                <Route key={i} path={path} element={<Element />} />
              ))}
            </Routes>
          </Router>
        </Suspense>
      </Provider>
    </ThemeProvider>
  )
}

export default App
