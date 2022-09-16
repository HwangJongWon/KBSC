import { Header } from '../components/Styles/Header/Header.styled'
import { Container } from '../components/Styles/Container/Container.style'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import React , { useRef } from 'react';
import { Box } from '@mui/system';
import { Text } from '../components/Styles/Container/Camera.style';
import { useState, useEffect } from 'react';
import ApiService from '../ApiService';
import { request } from 'http';
import base64 from 'base-64';
import {saveAs} from 'file-saver'
import { Wordlist } from '../components/Styles/Container/Camera.style';


export default function FromText() {

  const [words, setWords] = useState([]);
const textRef = useRef(null);

function upload(){
  fetch("http://localhost:3000/wordList")
    .then(res=>{
      return res.json();
    })
    .then(data =>{
      setWords(data);
    });
  }

function update(){
  // fetch(`http://localhost:3000/text`,{
  //   method:'POST',
  //   headers:{
  //     'Content-Type' : 'application/json'
  //   },
  //   body : JSON.stringify({
  //     text : textRef.current.value,
  //   }),
  // })
  // .then(res => {
  //   if(res.ok){
  //     alert('생성이 완료되었습니다.')
  //   }
  // })

  const text = textRef.current.value;
  console.log(text)
  let tmptext = {text};
  

  const fs = require("fs");
  ApiService.fromText(tmptext).then(response => {
    console.log("response: ", response);
    const res = response.data
    console.log("res", res)
    console.log("으아악:",Object.values(res))
    

    const blobb = [];
    let i =0;
    // for(const value in Object.values(res)){
      for(let k=0; k < res.list.length;k++){
      console.log("이미지입니다:",res.list[i].image)
      console.log("메세지입니다:",res.list[i].message)
      blobb[i] = res.list[i].image
      console.log("values=",Object.values(res))
      i++;
      console.log('blobb=',blobb[i])
    }

    const blobBin = [];
    for(let j=0; j<blobb.length;j+=1){
      blobBin[j]= window.atob(blobb[j]); // base64 데이터 디코딩
      console.log("blobBin=", blobBin)
      const array = [];
      for (let i = 0; i < blobBin[j].length; i += 1) {			
      array.push(blobBin[j].charCodeAt(i)); //인코드된 문자들을 0번째부터 끝까지 해독하여 유니코드 값을 array 에 저장한다. 
      }
      
      const u8arr = new Uint8Array(array); //8비트의 형식화 배열을 생성한다. 
      const newFile = new File([u8arr], "hehe.png", {type: "image/png"})
      const file = new Blob([u8arr], { type: "image/png" }); // Blob 생성
      const formdata = new FormData(); // formData 생성
      formdata.append("drawImg", file); // file data 추가
      // saveAs(file, 'hehe.png')
      upload()
    }
    
    
    
  })

}






return (
  <Container>
    <Header>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 80
      }}
    >
    <TextField 
    margin = "normal"
    label="검색어를 입력해주세요" 
    name = "검색어를 입력해주세요" 
    autoFocus
    style={{width:'490%'}}
    inputRef={textRef}
    />
    <Button onClick={ () => {
      update() 
      // upload()
      }} style={{fontSize:'17px'}}>번역</Button>

    </Box>      
    <Wordlist>
        <div style={{fontSize:'25px', marginBottom:'3%',marginTop:'2%', textAlign:'center'}}> : :  수어번역  : : </div>
        {words.map((word) => (
          <div className='word'>
            {word.id} . {word.word} 
            <img src = {word.src} alt="profile"/>
            {/* <img src = {word.src2} alt="profile"/> */}
            <video autoPlay={false} playsInline={true} muted={true} controls={true}
            style={{width:'200px',position:'absolute', marginLeft:'5%'}}>
              <source src={word.src3} type="video/mp4"/>
            </video>
            <br/><br/> <div style={{marginTop:'3%'}}>[ 수형 설명 ] 
            <br/>{word.text}</div>
          </div>
        ))}
    </Wordlist>
    </Header>

  </Container>
)
}