import React, { useEffect, useRef } from 'react'
import { Camera, Text } from '../components/Styles/Container/Camera.style'
import { Header } from '../components/Styles/Header/Header.styled'
import { Container } from '../components/Styles/Container/Container.style'
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
          <h3>Turn on your Web Camera</h3>
          <video ref={videoRef}></video>
        </Camera>
      </Header>
      <Text>
      transform
      </Text>
    </Container>
    
    
  )
}

export default ToText