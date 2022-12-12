import styled from 'styled-components'

interface HeaderProps {
  title: string
  subtitle: string
  children: JSX.Element
}

const Wrapper = styled.header`
  .heading {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1;
`

const Subtitle = styled.h2`
  text-transform: lowercase;
  opacity: 0.6;
`

const Content = styled.div`
  margin-top: 2rem;
`

export const Header = ({ title, subtitle, children }: HeaderProps) => {
  return (
    <Wrapper>
      <div className="heading">
        <Title className="text-large">{title}</Title>
        <Subtitle className="text-medium">{subtitle}</Subtitle>
      </div>
      <Content>{children}</Content>
    </Wrapper>
  )
}
