
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Projects from './Pages/Projects';
import Register from './Pages/Register';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Projects" element={<Projects/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
