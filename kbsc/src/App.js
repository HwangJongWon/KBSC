import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./screens/Home"
import FromText from "./screens/FromText"
import ToText from "./screens/ToText"
import SignUp from "./screens/SignUp"
import SignIn from "./screens/SignIn"
import NavBarElements from "./components/Navbar/NavBarElements";
import Parallax from "./components/Parallas";

function App() {
  return (
    <Router>
      <NavBarElements />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Fromtext " element = {<FromText/>} />
        <Route path = "/ToText" element = {<ToText/>} />
        <Route path = "/SignIn" element = {<SignIn/>} />
        <Route path = "/SignUp" element = {<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
