import { Provider } from 'react-redux'

import store from '@/redux/store'

function App() {
  return <Provider store={store}>Hello World</Provider>
}

export default App
