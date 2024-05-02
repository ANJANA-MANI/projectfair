
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Footer from './Components/Footer';
import Auth from './Components/Auth';
import { useContext } from 'react';
import { tokenAuthorizationContext } from './context/TokenAuth';
function App() {
  const{isAuthorized,setIsAuthorized}=useContext(tokenAuthorizationContext)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Auth/>}/>
        <Route path="/Register" element={<Auth register/>}/>
        <Route path="/Dashboard" element={isAuthorized?<Dashboard/>:<Home/>}/>
        <Route path="/Projects" element={isAuthorized?<Projects/>:<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
