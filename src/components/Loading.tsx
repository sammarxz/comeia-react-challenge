import styled from 'styled-components'
import { Loader } from 'lucide-react'

import { Layout, Container } from '@/components'

const Wrapper = styled.div`
  svg {
    animation: spin 5s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const Loading = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Loader size={48} />
        </Wrapper>
      </Container>
    </Layout>
  )
}
