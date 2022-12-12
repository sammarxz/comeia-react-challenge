import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackIcon = styled(Link)`
  position: absolute;
  top: 4rem;
  left: 2rem;

  @media (min-width: 540px) {
    top: 8rem;
    left: 8rem;
  }
`

export const ActualTemp = styled.div`
  .value {
    font-size: 8rem;
    display: block;
    line-height: 0.8;
  }

  .minMax {
    position: relative;

    &:after {
      content: 'º C';
      font-size: 1rem;
      position: absolute;
      top: -100%;
      right: 0;
    }
    span {
      opacity: 0.6;
      font-weight: bold;
    }
  }
`

export const IconWrapper = styled.div`
  margin-top: 2rem;
`

export const Hours = styled.section`
  margin-top: 3rem;

  .name {
    margin-bottom: 0.4rem;
  }
`

export const Forecast = styled.section`
  margin-top: 4rem;

  .name {
    opacity: 0.6;
  }
`
