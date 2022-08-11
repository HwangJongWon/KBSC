import React from 'react'
import { Header, MainHeader } from '../components/Styles/Header/Header.styled'
import { Container } from '../components/Styles/Container/Container.style'
const Home = () => {
  return (
    <Container>
      <Header>
        <MainHeader>
          <h1>Home</h1>
        </MainHeader>
      </Header>
    </Container>
  )
}

export default Home