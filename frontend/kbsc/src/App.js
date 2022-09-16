import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./screens/Home"
import FromText from "./screens/FromText"
import ToText from "./screens/ToText"
import SignUp from "./screens/SignUp"
import SignIn from "./screens/SignIn"
import NavBarElements from "./components/Navbar/NavBarElements";
import Learn from './screens/Learn';
import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// import About from './screens/About';
// import PostWrite from './screens/PostWrite';

function App() {
  return (
    <Router>
      <NavBarElements />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/FromText" element = {<FromText/>} />
        <Route path = "/ToText" element = {<ToText/>} />
        <Route path = "/SignIn" element = {<SignIn/>} />
        <Route path = "/SignUp" element = {<SignUp/>} />
        <Route path = "/Learn" element = {<Learn/>} />
        
        
      </Routes>
    </Router>
  );
}




// let endPoint = "http://localhost:5000";
// let socket = io.connect(`${endPoint}`);

  // const [messages, setMessages] = useState(["Hello And Welcome"]);
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   getMessages();
  // }, [messages.length]);

  // const getMessages = () => {
  //   socket.on("message", msg => {
  //     //   let allMessages = messages;
  //     //   allMessages.push(msg);
  //     //   setMessages(allMessages);
  //     setMessages([...messages, msg]);
  //   });
  // };

  // // On Change
  // const onChange = e => {
  //   setMessage(e.target.value);
  // };

  // // On Click
  // const onClick = () => {
  //   if (message !== "") {
  //     socket.emit("message", message);
  //     setMessage("");
  //   } else {
  //     alert("Please Add A Message");
  //   }
  // };

  


export default App;