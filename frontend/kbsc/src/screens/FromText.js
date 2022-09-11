import { Header } from '../components/Styles/Header/Header.styled'
import { Container } from '../components/Styles/Container/Container.style'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import React , { useRef } from 'react';
import { Box } from '@mui/system';
import { Text } from '../components/Styles/Container/Camera.style';
import { useState, useEffect } from 'react';


export default function FromText() {
const textRef = useRef(null);


function update(){
  fetch(`http://localhost:3000/text`,{
    method:'POST',
    headers:{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      text : textRef.current.value,
    }),
  })
  .then(res => {
    if(res.ok){
      alert('생성이 완료되었습니다.')
    }
  })

}

const [words, setWords] = useState([]);

useEffect(() => {
  fetch("http://localhost:3000/wordList")
    .then(res=>{
      return res.json();
    })
    .then(data =>{
      setWords(data);
    });

}, []);

return (
  <Container>
    <Header>
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
    <TextField 
    margin = "normal"
    label="text" 
    name = "text" 
    autoFocus
    style={{width:'350%'}}
    inputRef={textRef}
    />
    <Button onClick={update}>번역</Button>
    </Box>
    </Header>
    <Text>
    {words.map((word) => (
        <div className='word'>
          {word.id} . {word.word} : {word.text}
          <img src = {word.src}/>
        </div>
    ))}

    </Text>
  </Container>
)}
