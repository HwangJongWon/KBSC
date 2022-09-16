import React from 'react'
import { HomeHeader, MainHeader,Img } from '../components/Styles/Header/Header.styled'
import { Container } from '../components/Styles/Container/Container.style'
import Link from '@mui/material/Link';


const Home = () => {
  return (
    <Container>
      <HomeHeader>
        <MainHeader>
        <div className='text' style={{marginBottom:'2%'}}>
          <span style={{fontSize:'35px', fontWeight:'bolder',color:'#de872d',fontFamily:'logo'}}>수어지교 </span> <br/>
          <span style={{fontSize:'23px', fontWeight:'bolder',color:'#de872d'}}>( 手語之交 ) </span> 
          
          <br/>" [수어 + 한국어] 를 친민한 관계로 만들어주는 수어 번역 서비스 "</div>
        <div className="container">
          <div className='grid-item'>
            <Link href="/FromText" style={{ textDecorationLine: 'none'}}>
              {"한국어 -> 수어"}
            </Link>
          </div>
          <p></p>
          <div className='grid-item'>
          <Link href="/ToText" style={{ textDecorationLine: 'none' }}>
            {"수어 -> 한국어"}
          </Link>
          </div>
          <p></p>
          <div className='grid-item'>
          <Link href="/Learn" style={{ textDecorationLine: 'none'}}>
            {"수어 학습하기"}
          </Link>
          </div>
        </div>
        <div className='text'>
          <p></p>
          <br></br>
        <em>"</em> 한국어와 한국수어는 다른 언어예요. 농인들에게 한글은 외국어나 다름없습니다.
        <br></br>우리나라 사람 대부분이 영어 교육을 받지만 완전히 이해하기 어려워하는 것과 같다고 보면 됩니다.<em>"</em>
        </div>
        </MainHeader>
      </HomeHeader>
        <Img>
          <div id="wrap">
          <article><img alt = "error" src={require("../img/office-620822_1280.webp")} ></img></article>
          <article><img alt = "error" src={require("../img/수화Img4.jpg")}></img></article>
          <article><img alt = "error" src={require("../img/수화Img2.jpg")}></img></article>
          <article><img alt = "error" src={require("../img/수화Img6.jpg")}></img></article>
          
          </div>
        </Img>
    </Container>
  )
}

export default Home