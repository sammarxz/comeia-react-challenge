import { Provider } from 'react-redux'

import store from '@/redux/store'
import { AxiosInterceptor } from '@/interceptors'

AxiosInterceptor()

function App() {
  return <Provider store={store}>Hello World</Provider>
}

export default App
