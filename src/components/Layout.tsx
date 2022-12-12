import styled, { css } from 'styled-components'

export const Layout = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `};
`
