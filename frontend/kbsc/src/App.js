import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./screens/Home"
import FromText from "./screens/FromText"
import ToText from "./screens/ToText"
import SignUp from "./screens/SignUp"
import SignIn from "./screens/SignIn"
import NavBarElements from "./components/Navbar/NavBarElements";
import Learn from './screens/Learn';


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

export default App;
