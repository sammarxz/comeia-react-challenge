import styled from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 2rem;
  font: inherit;
  cursor: pointer;
  color: currentColor;
  outline: none;
  border: none;
  font-size: 1.2rem;
  padding: 0.8rem 1.4rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`
