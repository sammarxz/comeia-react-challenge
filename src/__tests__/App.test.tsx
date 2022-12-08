import { render, screen } from '@testing-library/react'

import App from '@/App'

describe('<App />', () => {
  it('should render App component correctly', () => {
    render(<App />)
    expect(screen.getByText('Hello World'))
  })
})
