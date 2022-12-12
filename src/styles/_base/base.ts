import { css } from 'styled-components'

export const Base = css`
  html,
  body {
    height: 100%;
  }

  html {
    font-size: 16px;
  }

  @media (min-width: 540px) {
    html {
      font-size: 18px;
    }
  }

  body {
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
