import React, { useEffect, useRef } from 'react'
import { Camera, Text } from '../components/Styles/Container/Camera.style'
import { Header } from '../components/Styles/Header/Header.styled'
import { Container } from '../components/Styles/Container/Container.style'
// import { createProxyMiddleware } from 'http-proxy-middleware'

const ToText = () => {
  let videoRef = useRef(null)

  //사용자 웹캠에 접근

  const getUserCamera = () =>{
    navigator.mediaDevices.getUserMedia({
      video:true
    })
    .then((stream) => {
      //비디오 tag에 stream 추가
      let video = videoRef.current

      video.srcObject = stream

      video.play()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getUserCamera()
  },[videoRef])

  return (
    <Container>
      <Header>
        <Camera>
        <h3 style={{fontSize:'35px', marginBottom:'3%',marginTop:'2%'}}> : : 한글 번역 : : <br/>
          <span style={{fontSize:'20px',fontWeight:'lighter'}}>손을 들어 카메라에 비춰주세요</span></h3>
         

          <div>
          <img
            src="http://localhost:5000/video_feed"
            alt="Video"
          />
          </div>
    
        </Camera>
      </Header>
    </Container>


    
  )
}

export default ToText