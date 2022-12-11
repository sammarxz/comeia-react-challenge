import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import store from '@/redux/store'
import { AxiosInterceptor } from '@/interceptors'

AxiosInterceptor()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello World</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
