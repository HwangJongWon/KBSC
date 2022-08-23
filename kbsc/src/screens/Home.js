import React from 'react'
import { Header, MainHeader } from '../components/Styles/Header/Header.styled'
import { Container } from '../components/Styles/Container/Container.style'
import Link from '@mui/material/Link';

const Home = () => {
  return (
    <Container>
      <Header>
        <MainHeader>
        <div className="fonts">
        <Link href="/FromText" >
          {"from text to 수어"}
        </Link>
        <p></p>
        <Link href="/ToText" >
          {"from 수어 to text"}
        </Link>
        </div>
        </MainHeader>
      </Header>
    </Container>
  )
}

export default Home