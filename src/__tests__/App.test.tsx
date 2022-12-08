import { render } from '@testing-library/react'

import App from '@/App'

describe('<App />', () => {
  it('should render App component correctly', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })
})
